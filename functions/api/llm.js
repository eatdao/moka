export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 去掉 /api/llm 前缀，拼接到你的 Worker 地址
  const path = url.pathname.replace('/api/llm', '');
  const workerUrl = "https://moka-api-proxy.eatdao.workers.dev" + path + url.search;

  // 原样转发请求给 Worker
  const proxyReq = new Request(workerUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  return fetch(proxyReq);
}
