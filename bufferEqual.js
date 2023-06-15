// Syntax: buffer.equals(buf)
const { Buffer } = require('buffer');

let hi = Buffer.from('hi')
let hello = Buffer.from('Hello')

console.log(hi.equals(hello))