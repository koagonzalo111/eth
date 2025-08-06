import * as secp from '@noble/secp256k1';
import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha256';

// ✅ Set the missing hash function
secp.utils.hmacSha256Sync = (key, ...msgs) => hmac(sha256, key, ...msgs);

// 🔐 Generate a random private key
const privateKey = secp.utils.randomPrivateKey();
console.log('Private Key:', Buffer.from(privateKey).toString('hex'));

// 🔓 Derive public key from private key
const publicKey = secp.getPublicKey(privateKey);
console.log('Public Key:', Buffer.from(publicKey).toString('hex'));

// ✉️ Sign a message
const msg = new TextEncoder().encode('Hello Elparadisogonzalo!');
const signature = await secp.sign(msg, privateKey);
console.log('Signature:', Buffer.from(signature).toString('hex'));

// ✅ Verify signature
const isValid = await secp.verify(signature, msg, publicKey);
console.log('Signature valid?', isValid);
