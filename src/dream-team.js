const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
      &&  members
          .reduce((arSecretName, sMember) => {
              if ('string' === typeof sMember) arSecretName.push(sMember.trim().substr(0,1).toUpperCase());
              return arSecretName;
            }, []
          )
          .sort()
          .join('')
      || false;
};
