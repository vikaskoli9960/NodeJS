const { Buffer } = require('buffer');

let buf = Buffer.from('Hello world', 'utf-8');
let buf2 = Buffer.from([1, 2, 3, 4, 5, 6, 7]);
let uint32array = new Uint32Array(buf);

console.log(buf.toString());
console.log(buf2.toString());

// for(const b of buf.toString()) {
//     console.log(b);
// }
