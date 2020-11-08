'use strict'

const http = require('http')
const bl = require('bl')

let count = 0
let result = []

function printData() {
    result.forEach(element => console.log(element))
}

function get(idx) {
    http.get(process.argv[2 + idx], response => {
        
        response.pipe(bl((err, data) => {
            if(err) return console.error(err)
            count++
            result[idx] = data.toString()
            if (count == 3) printData()
        }))
    })
}

for (let i = 0; i < 3; i++) {
    get(i)
}
