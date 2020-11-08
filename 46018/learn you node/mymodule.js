'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (directory, extension, cb) => {
    fs.readdir(directory, (err, list) => {
        if(err) return cb(err)
        cb(null, list.filter(file => path.extname(file) === '.' + extension))
    })
}