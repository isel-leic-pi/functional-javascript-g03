"use strict"

function getShortMessages(messages) {
    return messages
    .filter(m => m.message.length < 50)
    .map(item => item.message)
}

module.exports = getShortMessages