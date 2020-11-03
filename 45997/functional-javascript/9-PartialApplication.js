'use strict'

const slice = Array.prototype.slice

function logger(namespace) {
    return function() {
        const args = slice.call(arguments)
        console.log.apply(null, [namespace].concat(args))
    }
}

module.exports = logger