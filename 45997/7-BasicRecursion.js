'use strict'

function reduce(arr, fn, initial) {
    return (function recursion(idx, value) {
        if(idx > arr.length - 1) return value
        return recursion(idx + 1, fn(value, arr[idx], arr))
    })(0, initial)
}

module.exports = reduce