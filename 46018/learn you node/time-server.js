'use strict'

const net = require('net')

function fillWithZeros(idx) {
    return idx < 10 ? '0' + idx : idx
}

const server = net.createServer(socket => {
    const date = new Date()
    const year = fillWithZeros(date.getFullYear())
    const month = fillWithZeros(date.getMonth() + 1)
    const day = fillWithZeros(date.getDate())
    const hour = fillWithZeros(date.getHours())
    const minutes = fillWithZeros(date.getMinutes())
    socket.end(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n')
})

server.listen(process.argv[2])