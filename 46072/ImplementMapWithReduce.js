module.exports = function arrayMap(arr, fn, thisArg){
    return arr.reduce( function(result, curr, index, arr){
        result.push(fn.call(thisArg, curr, index, arr))
        return result
    }, [])
}