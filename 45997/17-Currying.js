'use strict'

function curryN(fn, n) {
    n = (n === undefined) ? fn.length : n
    return function curry(arg) {
        if(n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
    }
}

module.exports = curryN