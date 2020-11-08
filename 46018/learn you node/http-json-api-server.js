'use strict'

const http = require('http')
const url = require('url')

function formatIso(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function formatUnix(date) {
    return { unixtime: date.getTime() }
}

const server = http.createServer((request, response) => {
    if(request.method !== 'GET') {
        return response.end('Not a GET request')
    }

    const path = url.parse(request.url, true)
    const date = new Date(path.query.iso)
    const route = path.pathname
    let data = []
    
    if(route === '/api/parsetime') {
        data = formatIso(date)
    }else if(route === '/api/unixtime') {
        data = formatUnix(date)
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(data))
    
})

server.listen(Number(process.argv[2]))