'use strict'

function Spy(target, method) {
    const result = {count: 0}
    const toSpy = target[method]
    target[method] = function() {
        result.count += 1
        return toSpy.apply(target, arguments)
    }
    return result
}

module.exports = Spy