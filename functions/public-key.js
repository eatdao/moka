export async function onRequest(context) {
  // 返回一个格式正确的公钥，让 Moka 的加密流程能通过
  // 由于 Worker 会覆盖真实 API Key，这里用测试公钥即可
  const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAptXD40fPBsofniWA5Gud
x0v1Z4+CgSNnCQDVbsa0ht/SkcABJQBcZTNTFPtvbytMIy1r9KDawdWJ0QsSOHtJ
ZsnAYZP3dgYLQRIcP5f6XNiN6sA5mUSQEXY+MBmC8SIIMZL9NIBJ5Lr7QHSLpXMP
NM/mHJLTvrUOqT6czKjQnQYXkkQuSA6ZQQR3GRUQNPG0v5A7DNQj+PeG1wFovOSz
LRWcpIgb1RvM6eMTtQWsC+yxN88fd98YGDX201Jh62mRo1wGWzYThEOIaK6mTwMl
zkuHY821qiIC++TP6Z5MkULox9Ma3YlcQxwY8fV773WYus/gm202WDJP2mpvAn/F
fwIDAQAB
-----END PUBLIC KEY-----
`;

  return new Response(JSON.stringify({
    publicKey: publicKey
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  });
}
