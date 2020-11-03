module.exports = function repeat(operation, num){
    if(num <= 0) return

    operation()

    setTimeout(() => repeat(operation, --num))

}