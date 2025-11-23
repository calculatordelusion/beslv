const BASE = 'https://beesolver.com';

async function fetchJSON(url, fetchImpl) {
	const res = await fetchImpl(url, {
		headers: {
			'accept': 'application/json,text/html,*/*'
		}
	});
	if (!res.ok) {
		throw new Error(`Upstream ${url} failed: ${res.status}`);
	}
	return await res.json();
}

// Dehydrate SvelteKit's compact indexed data format
function dehydrate(data) {
	if (Array.isArray(data)) {
		return data.map(dehydrate);
	}
	if (data && typeof data === 'object') {
		const result = {};
		for (const key in data) {
			const value = data[key];
			result[key] = typeof value === 'number' && Array.isArray(data.__data__) 
				? dehydrate(data.__data__[value])
				: dehydrate(value);
		}
		return result;
	}
	return data;
}

function extractDataNode(json) {
	// beesolver returns SvelteKit's compact format: { type: 'data', nodes: [...] }
	const nodes = json?.nodes || [];
	if (!Array.isArray(nodes) || nodes.length === 0) {
		throw new Error('Invalid upstream JSON structure');
	}
	
	// Last node typically contains the page data
	const node = nodes[nodes.length - 1];
	if (!node || !Array.isArray(node.data)) {
		throw new Error('No data in node');
	}
	
	// SvelteKit compact format: data is array of values referenced by index
	// For puzzle pages, the data object is at index 3
	// For archive page, data[1] is an array of indices to puzzle objects
	let pageData = null;
	
	// First check if data[1] is an array (archive format)
	if (Array.isArray(node.data[1]) && node.data[1].length > 0) {
		// This is likely the archive - array of indices
		pageData = node.data[1];
	} else {
		// Look for puzzle object
		for (let i = node.data.length - 1; i >= 0; i--) {
			const candidate = node.data[i];
			if (candidate && typeof candidate === 'object' && !Array.isArray(candidate)) {
				// Check if it has puzzle properties
				if (candidate.date || candidate.centerLetter || candidate.archive) {
					pageData = candidate;
					break;
				}
			}
		}
	}
	
	if (!pageData) {
		return null;
	}
	
	// Reconstruct the object by resolving indices (recursively)
	const reconstruct = (obj, dataArray) => {
		if (Array.isArray(obj)) {
			return obj.map(item => {
				if (typeof item === 'number' && item >= 0 && item < dataArray.length) {
					return reconstruct(dataArray[item], dataArray);
				}
				return reconstruct(item, dataArray);
			});
		}
		if (obj && typeof obj === 'object') {
			const result = {};
			for (const key in obj) {
				const value = obj[key];
				if (typeof value === 'number' && value >= 0 && value < dataArray.length) {
					result[key] = reconstruct(dataArray[value], dataArray);
				} else {
					result[key] = reconstruct(value, dataArray);
				}
			}
			return result;
		}
		return obj;
	};
	
	// The actual puzzle data is typically at index 3 for puzzle pages, 1 for archive
	return reconstruct(pageData, node.data);
}

export async function getTodayHints(fetchImpl) {
	const json = await fetchJSON(`${BASE}/hints/__data.json`, fetchImpl);
	return extractDataNode(json);
}

export async function getTodayAnswers(fetchImpl) {
	const json = await fetchJSON(`${BASE}/answers/__data.json`, fetchImpl);
	return extractDataNode(json);
}

export async function getTodayPangram(fetchImpl) {
	// pangram page has minimal data; hints also includes pangrams
	const json = await fetchJSON(`${BASE}/pangram/__data.json`, fetchImpl).catch(() => null);
	if (json) return extractDataNode(json);
	const hints = await getTodayHints(fetchImpl);
	return { date: hints.date, pangrams: hints.pangrams, formattedDate: hints.formattedDate };
}

export async function getArchive(fetchImpl) {
	const json = await fetchJSON(`${BASE}/archive/__data.json`, fetchImpl);
	const data = extractDataNode(json);
	// Archive page returns array of puzzle objects directly
	// If it's an array, return as-is; otherwise extract .archive property
	return Array.isArray(data) ? data : (data?.archive || data);
}

export async function getAnswersByDate(date, fetchImpl) {
	const json = await fetchJSON(`${BASE}/${date}/answers/__data.json`, fetchImpl);
	return extractDataNode(json);
}

export async function getHintsByDate(date, fetchImpl) {
	const json = await fetchJSON(`${BASE}/${date}/hints/__data.json`, fetchImpl);
	return extractDataNode(json);
}

