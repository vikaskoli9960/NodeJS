const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead({ 'Content-type': 'text/html' })
    response.end()
})