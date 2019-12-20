var catalog  = require('./catalog.json');
var emloyee = require('./employeesAccounts.json');

module.exports = function() {
  return {
    catalog: catalog,
    employeesAccounts: emloyee
  }
};
