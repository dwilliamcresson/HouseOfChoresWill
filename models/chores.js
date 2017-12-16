// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var chores = {
    all: function(cb) {
        orm.selectAll('tasks', function(res) {
            cb(res);
        });
    },
    alltasks: function(cb) {
        orm.selectAllTasks('tasks', function(res) {
            cb(res);
        });
    },
    choreDays: function(cb) {
        orm.selectAllDays('task_user_sched', function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create(table, cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update(table, objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = chores;