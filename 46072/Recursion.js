module.exports = function geetDependencies(tree, result){
    result = result || []
    var dependencies = tree && tree.dependencies || []
    Object.keys(dependencies).forEach(
        function(depend){
            var key = depend + '@' + tree.dependencies[depend].version
            if(result.indexOf(key) === -1) result.push(key)
            geetDependencies(tree.dependencies[depend], result)
        }
    )
    return result.sort()
}