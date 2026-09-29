export async function onRequest(context) {
  // 完整的 PEM 格式公钥（你可以替换成你之前生成的公钥）
  const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAptXD40fPBsofniWA5Gud
x0v1Z4+CgSNnCQDVbsa0ht/SkcABJQBcZTNTFPtvbytMIy1r9KDawdWJ0QsSOHtJ
ZsnAYZP3dgYLQRIcP5f6XNiN6sA5mUSQEXY+MBmC8SIIMZL9NIBJ5Lr7QHSLpXMP
NM/mHJLTvrUOqT6czKjQnQYXkkQuSA6ZQQR3GRUQNPG0v5A7DNQj+PeG1wFovOSz
LRWcpIgb1RvM6eMTtQWsC+yxN88fd98YGDX201Jh62mRo1wGWzYThEOIaK6mTwMl
zkuHY821qiIC++TP6Z5MkULox9Ma3YlcQxwY8fV773WYus/gm202WDJP2mpvAn/F
fwIDAQAB
-----END PUBLIC KEY-----`;

  // 剥离 PEM 头尾和所有换行符，只保留纯 Base64 字符串
  const publicKeyBase64 = publicKeyPem
    .replace('-----BEGIN PUBLIC KEY-----', '')
    .replace('-----END PUBLIC KEY-----', '')
    .replace(/\n/g, '')
    .trim();

  return new Response(JSON.stringify({
    publicKey: publicKeyBase64
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
