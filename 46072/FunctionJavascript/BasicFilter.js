module.exports = function getShortMessages(messages) {
  return messages
    .filter(function (line) {
      return line.message.length < 50;
    })
    .map(function (line) {
      return line.message;
    });
};
