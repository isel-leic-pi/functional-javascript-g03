module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce((result, curr, index, arr) => {
        result.push(fn.call(thisArg, curr, index, arr))
        return result
    }, [])
}