'use strict'

const http = require('http')
const bl = require('bl')
let result = []
let count = 0

function print() {
    for(let i = 0; i < 3; i++) {
        console.log(result[i])
    }
}

function getHttp(idx) {
    http.get(process.argv[2 + idx], function (response) {
        response.pipe(bl(function (err, data) {
            if(err) return console.error(err)
            result[idx] = data.toString()
            count++
            if(count === 3) print()
        }))
    })
}

for(let i = 0; i < 3; i++) {
    getHttp(i)
}