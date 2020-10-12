module.exports = function Spy(target, method){
    var result ={
        count : 0
    }
    var resTarget = target[method]
    target[method] = function(){
        result.count++
        return resTarget.apply(this, arguments)
    }
    return result
}