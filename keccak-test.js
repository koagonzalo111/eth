const keccak = require('keccak');

const input = 'your data'; // Replace with any input string
const hash = keccak('keccak256').update(input).digest('hex');

console.log('Hash:', hash);
