import {
  utils,
  getPublicKey,
  sign,
  verify
} from "https://cdn.skypack.dev/@noble/secp256k1";

const output = document.getElementById("output");

(async () => {
  try {
    output.textContent = "Generating key pair...";

    const privateKey = utils.randomPrivateKey();
    const publicKey = getPublicKey(privateKey);

    const msg = new TextEncoder().encode("Hello from Gonzalo");
    const signature = await sign(msg, privateKey);
    const valid = await verify(signature, msg, publicKey);

    output.textContent = `
✅ secp256k1 Test Complete

Private Key:
${utils.bytesToHex(privateKey)}

Public Key:
${utils.bytesToHex(publicKey)}

Message:
"Hello from Gonzalo"

Signature:
${utils.bytesToHex(signature)}

Signature Valid? ${valid ? "✅ Yes" : "❌ No"}
    `.trim();
  } catch (err) {
    output.textContent = `❌ Error: ${err.message}`;
  }
})();
