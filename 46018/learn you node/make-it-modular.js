'use strict'

const mymodule = require('./mymodule.js')
const directory = process.argv[2]
const extension = process.argv[3]

mymodule (directory, extension, (err, list) => {
    if(err) return console.log(err)
    list.forEach(file => console.log(file))
})