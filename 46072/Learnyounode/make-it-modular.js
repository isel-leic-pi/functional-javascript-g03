'use strict'

const filterFn = require('./mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, (err, list) => {
    if(err){
        console.error('Error', err)
    }
    list.forEach(function (file) {
        console.log(file)
      })
})

