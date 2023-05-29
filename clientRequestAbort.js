// syntax: request.abort()

const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Ok')
})

server.listen(port, host, () => {
    console.log('Server is started')

    //  Making a request
    const options = {
        port: port,
        host: host,
        headers: {
            'Connection': 'Upgrade',
            'Upgrade': 'websocket'
        }
    }

    //  Getting a client request
    const request = http.request(options)

    //  Aborting the request
    request.abort()

    request.on('abort', () => {
        console.log('Client request is aborted')
    })
})