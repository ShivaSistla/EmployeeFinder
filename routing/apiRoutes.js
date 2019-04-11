let employeesList = require('../app/data/employees.js');


module.exports = function (app) {

  /**
   * GET the employeelist 
   */
  app.get('/api/employees', function (req, res) {
    res.json(employeesList);
  });

}


