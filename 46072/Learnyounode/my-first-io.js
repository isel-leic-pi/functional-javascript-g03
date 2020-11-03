'use strict'

const fs = require('fs')

let buffer = fs.readFileSync(process.argv[2], 'utf-8')

const str = buffer.toString()

console.log(str.split('\n').length - 1)



