const { Buffer } = require('buffer');

const hex = Buffer.from('f09f98a5');
console.log(hex.readIntBE(0, 3));
