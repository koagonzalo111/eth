// patch-secp.mjs
import * as secp from '@noble/secp256k1';

if (!secp.utils.hmacSha256Sync) {
  const { hmac } = await import('@noble/hashes/hmac');
  const { sha256 } = await import('@noble/hashes/sha256');

  secp.utils.hmacSha256Sync = (key, ...msgs) =>
    hmac(sha256, key, secp.utils.concatBytes(...msgs));

  console.log('✅ secp256k1 patched (HMAC-SHA256 injected)');
}
