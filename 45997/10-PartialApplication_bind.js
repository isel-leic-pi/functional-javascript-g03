'use strict'

module.exports = function(namespace) {
    return console.log.bind(null, namespace)
}