const { Buffer } = require('node:buffer');

let buf = Buffer.from('Hello world', 'utf-8')
let buf2 = Buffer.from([1, 2, 3, 4,])
let uint32array = new Uint32Array(buf)

console.log(buf.toString())
console.log(buf2.toString())

// for(const b of buf.toString()) {
//     console.log(b)
// }