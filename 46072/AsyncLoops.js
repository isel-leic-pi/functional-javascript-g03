module.exports = function loadUseres(userIds, load, done){
    var users = []
    var usersComplet = 0
    userIds.forEach( 
        function(id, index){
            load(id, function(user){
                users[index] = user
                if(++usersComplet === userIds.length)
                    return done(users)
            })
        }
    );
}