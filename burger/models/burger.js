var orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(name, cb) {
        orm.create("burgers",["burger_name"], [name], function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },

      delete: function(burgers, condition, cb) {
        orm.delete(burgers, condition, function(res) {
          cb(res);
        });
      }
}
module.exports = burger;