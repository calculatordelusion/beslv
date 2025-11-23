const BASE = "https://beesolver.com";
async function fetchJSON(url, fetchImpl) {
  const res = await fetchImpl(url, {
    headers: {
      "accept": "application/json,text/html,*/*"
    }
  });
  if (!res.ok) {
    throw new Error(`Upstream ${url} failed: ${res.status}`);
  }
  return await res.json();
}
function extractDataNode(json) {
  const nodes = json?.nodes || [];
  if (!Array.isArray(nodes) || nodes.length === 0) {
    throw new Error("Invalid upstream JSON structure");
  }
  const node = nodes[nodes.length - 1];
  if (!node || !Array.isArray(node.data)) {
    throw new Error("No data in node");
  }
  let pageData = null;
  if (Array.isArray(node.data[1]) && node.data[1].length > 0) {
    pageData = node.data[1];
  } else {
    for (let i = node.data.length - 1; i >= 0; i--) {
      const candidate = node.data[i];
      if (candidate && typeof candidate === "object" && !Array.isArray(candidate)) {
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
  const reconstruct = (obj, dataArray) => {
    if (Array.isArray(obj)) {
      return obj.map((item) => {
        if (typeof item === "number" && item >= 0 && item < dataArray.length) {
          return reconstruct(dataArray[item], dataArray);
        }
        return reconstruct(item, dataArray);
      });
    }
    if (obj && typeof obj === "object") {
      const result = {};
      for (const key in obj) {
        const value = obj[key];
        if (typeof value === "number" && value >= 0 && value < dataArray.length) {
          result[key] = reconstruct(dataArray[value], dataArray);
        } else {
          result[key] = reconstruct(value, dataArray);
        }
      }
      return result;
    }
    return obj;
  };
  return reconstruct(pageData, node.data);
}
async function getTodayHints(fetchImpl) {
  const json = await fetchJSON(`${BASE}/hints/__data.json`, fetchImpl);
  return extractDataNode(json);
}
async function getTodayAnswers(fetchImpl) {
  const json = await fetchJSON(`${BASE}/answers/__data.json`, fetchImpl);
  return extractDataNode(json);
}
async function getTodayPangram(fetchImpl) {
  const json = await fetchJSON(`${BASE}/pangram/__data.json`, fetchImpl).catch(() => null);
  if (json) return extractDataNode(json);
  const hints = await getTodayHints(fetchImpl);
  return { date: hints.date, pangrams: hints.pangrams, formattedDate: hints.formattedDate };
}
async function getArchive(fetchImpl) {
  const json = await fetchJSON(`${BASE}/archive/__data.json`, fetchImpl);
  const data = extractDataNode(json);
  return Array.isArray(data) ? data : data?.archive || data;
}
async function getAnswersByDate(date, fetchImpl) {
  const json = await fetchJSON(`${BASE}/${date}/answers/__data.json`, fetchImpl);
  return extractDataNode(json);
}
async function getHintsByDate(date, fetchImpl) {
  const json = await fetchJSON(`${BASE}/${date}/hints/__data.json`, fetchImpl);
  return extractDataNode(json);
}
export {
  getTodayAnswers as a,
  getArchive as b,
  getTodayPangram as c,
  getAnswersByDate as d,
  getHintsByDate as e,
  getTodayHints as g
};
