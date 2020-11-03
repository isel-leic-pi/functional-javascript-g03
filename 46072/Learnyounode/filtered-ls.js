'use strict'

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]
const file = folder + ext

fs.readdir(folder, (err, listFiles) => {
    if(err)
        return console.log(err)

    listFiles.forEach((file) => {
        if(path.extname(file) === ext){
            console.log(file)
        }
            
    })
})