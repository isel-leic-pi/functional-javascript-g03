function loadUsers(userIds, load, done) {
    var users = []
    let counter = 0
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], (user) => {
            users[i] = user
            if(++counter == userIds.length) done(users)
        })
    }
    return users
}

module.exports = loadUsers