'use strict'

const fs = require('fs')
fs.readFile(process.argv[2], (err, buff) => {
    if (err) console.log(err);
    console.log(buff.toString().split('\n').length-1)
})
