//  Syntax: Buffer.alloc(size, fill, encoding)

const { Buffer } = require('buffer');

let text = Buffer.alloc(8, 'vikas')
console.log(text.toString())