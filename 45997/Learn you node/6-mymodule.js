'use strict'

const fs = require('fs')
const path = require('path')

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
        if(err) return callback(err)
        let filteredList = []
        list.forEach(function(file) {
            if(path.extname(file) === '.' + extension) {
                filteredList.push(file)
            }    
        })
        callback(null, filteredList)
    })
}