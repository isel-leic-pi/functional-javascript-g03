module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function x(submittedUsers) {
      return goodUsers.some(function y(goodUsers) {
        return goodUsers.id === submittedUsers.id;
      });
    });
  };
};
