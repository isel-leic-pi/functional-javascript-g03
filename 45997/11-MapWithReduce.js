'use strict'

module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(prev, curr, idx, arr) {
        prev.push(fn.call(thisArg, curr, idx, arr))
        return prev
    },[])
}