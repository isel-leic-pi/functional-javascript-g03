'use strict'

function getDependencies(tree, unique) {
    var dependencies = tree.dependencies || []
    unique = unique || []
    var keys = Object.keys(dependencies)

    if(tree.dependencies == null) return []

    keys.forEach(function(item) {
        var str = item + '@' + dependencies[item].version
        
        if(unique.indexOf(str) <= 0) {
            unique.push(str)
        }

        getDependencies(dependencies[item], unique)
    })
    return unique.sort()
}

module.exports = getDependencies