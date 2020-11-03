module.exports = function reduce(arr, fn, initial){
    return (function count(index, value){
        if(index > arr.length-1) return value
        return count(index + 1, fn(value, arr[index], index, arr))
    })(0, initial)
}