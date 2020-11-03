'use strict'

function loadUsers(userIds, load, done) {
    var users = [], total = 0
    userIds.forEach(function(id, idx) {
        load(id, function(user) {
            users[idx] = user
            total += 1
            if(total == userIds.length) {
                return done(users)
            }
        })
    })
}

module.exports = loadUsers