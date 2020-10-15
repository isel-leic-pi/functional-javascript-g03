function Spy(target, method) {
    const counter = {
        count: 0
    }

    let fun = target[method]
    target[method] = function() {
        counter.count++
        fun.apply(target, arguments)
    }

    return counter
}

module.exports = Spy