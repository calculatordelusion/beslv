// Fetch real puzzle data from beesolver.com and parse it
async function fetchRealData() {
	try {
		const response = await fetch('https://beesolver.com/hints/__data.json');
		const json = await response.json();
		
		// Extract the data node
		const nodes = json.nodes || [];
		const node = nodes[nodes.length - 1];
		const dataArray = node.data;
		
		// Reconstruct the puzzle data by resolving indices
		function reconstruct(obj, arr) {
			if (Array.isArray(obj)) {
				return obj.map(item => {
					if (typeof item === 'number' && item >= 0 && item < arr.length) {
						return reconstruct(arr[item], arr);
					}
					return reconstruct(item, arr);
				});
			}
			if (obj && typeof obj === 'object') {
				const result = {};
				for (const key in obj) {
					const value = obj[key];
					if (typeof value === 'number' && value >= 0 && value < arr.length) {
						result[key] = reconstruct(arr[value], arr);
					} else {
						result[key] = reconstruct(value, arr);
					}
				}
				return result;
			}
			return obj;
		}
		
		// The puzzle object is at index 3 (dataArray[3])
		const puzzleData = reconstruct(dataArray[3], dataArray);
		console.log('=== TODAY\'S PUZZLE DATA ===');
		console.log(JSON.stringify(puzzleData, null, 2));
		
		// Also fetch archive
		const archiveResponse = await fetch('https://beesolver.com/archive/__data.json');
		const archiveJson = await archiveResponse.json();
		const archiveNode = archiveJson.nodes[archiveJson.nodes.length - 1];
		
		console.log('\n\n=== ARCHIVE RAW NODE DATA (indices 0-5) ===');
		console.log(JSON.stringify(archiveNode.data.slice(0, 6), null, 2));
		
		// Try to find the archive data object
		let archiveDataObj = null;
		for (let i = archiveNode.data.length - 1; i >= 0; i--) {
			const candidate = archiveNode.data[i];
			if (candidate && typeof candidate === 'object' && !Array.isArray(candidate) && candidate.archive) {
				archiveDataObj = candidate;
				break;
			}
		}
		
		if (archiveDataObj) {
			const archiveData = reconstruct(archiveDataObj, archiveNode.data);
			console.log('\n\n=== ARCHIVE DATA (first 2 puzzles) ===');
			if (archiveData && archiveData.archive) {
				console.log(JSON.stringify(archiveData.archive.slice(0, 2), null, 2));
			}
		} else {
			console.log('\n\n=== ARCHIVE DATA NOT FOUND ===');
			console.log('Could not find archive object in node data');
		}
		
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

fetchRealData();

