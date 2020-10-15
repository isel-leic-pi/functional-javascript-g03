function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return operation.bind(operation, --num)
}

 function trampoline(fn) {
    while(fn && typeof fn === 'function') {
        fn = fn()
    }
}

 module.exports = function(operation, num) {
    trampoline(() => repeat(operation, num))
}