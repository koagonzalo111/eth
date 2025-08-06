// test-secp.mjs
import * as secp from '@noble/secp256k1';

const privateKey = secp.utils.randomPrivateKey();
console.log('Private Key:', Buffer.from(privateKey).toString('hex'));

const publicKey = secp.getPublicKey(privateKey);
console.log('Public Key:', Buffer.from(publicKey).toString('hex'));

const msg = new TextEncoder().encode("Hello from Gonzalo");
const sig = await secp.sign(msg, privateKey);
console.log('Signature:', Buffer.from(sig).toString('hex'));

const valid = await secp.verify(sig, msg, publicKey);
console.log('Signature valid?', valid);
