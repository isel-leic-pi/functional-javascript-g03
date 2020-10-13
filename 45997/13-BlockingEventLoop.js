'use strict'

function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return setImmediate(function() {
        repeat(operation, --num)
    })
}

module.exports = repeat