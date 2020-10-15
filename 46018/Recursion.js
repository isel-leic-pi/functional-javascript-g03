function getDependencies(tree, result) {

    var dep = tree.dependencies || []
    if(dep == null) return []

    result = result || []

    Object.keys(dep).forEach((key) => {
        let res = key + '@' + dep[key].version
        if(result.indexOf(res) <= 0) result.push(res)
        getDependencies(dep[key], result)
    })
    return result.sort()
}

module.exports = getDependencies