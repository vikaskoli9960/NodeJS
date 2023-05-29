const http = require('http')

http
    .createServer((Request, Response) => {
        Response.end('This is http module')
    })
    .listen(3000, function () {
        console.log('server is on port 3000')
    })