const handle = async ({ event, resolve, fetch }) => {
  const tryLocal = await resolve(event);
  if (tryLocal.status !== 404) return tryLocal;
  try {
    const upstreamUrl = `https://beesolver.com${event.url.pathname}${event.url.search}`;
    const upstreamRes = await fetch(upstreamUrl, {
      method: event.request.method,
      headers: {
        "user-agent": event.request.headers.get("user-agent") || "Mozilla/5.0",
        "accept": event.request.headers.get("accept") || "*/*",
        "accept-language": event.request.headers.get("accept-language") || "en-US,en;q=0.9"
      }
    });
    const contentType = upstreamRes.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      let html = await upstreamRes.text();
      html = html.replaceAll("https://beesolver.com", "").replaceAll('href="//beesolver.com', 'href="').replaceAll('="/_app/', '="/_app/');
      return new Response(html, {
        status: upstreamRes.status,
        headers: {
          "content-type": contentType,
          "cache-control": upstreamRes.headers.get("cache-control") || "public, max-age=3600"
        }
      });
    }
    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers: {
        "content-type": contentType,
        "cache-control": upstreamRes.headers.get("cache-control") || "public, max-age=86400"
      }
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return tryLocal;
  }
};
export {
  handle
};
