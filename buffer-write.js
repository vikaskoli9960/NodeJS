//  syntax: buf.write( string, offset, length, encoding )

const { Buffer } = require('node:buffer');

const buf = Buffer.from('Vikas is my friend')

buf.write(' This is koli', 5)

console.log(buf.toString())