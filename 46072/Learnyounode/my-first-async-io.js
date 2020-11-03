'use strict'

const fs = require('fs')

let buffer = fs.readFile(process.argv[2], function (err, contents){
    if(err)
        return console.log(err)

    const strN = contents.toString().split('\n').length-1
    console.log(strN)
})

