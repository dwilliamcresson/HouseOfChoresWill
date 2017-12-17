var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableInput, cb) {
        //var queryString = "SELECT * FROM " + tableInput + ";";
        var queryString = "CALL sp_get_calendar_data(); ";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result[0]);
        });
    },
    selectAllDays: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectAllTasks: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        console.log('qry:', queryString);
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol, cb) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo, cb) {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += printQuestionMarks(cols.length, true);
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length, false);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, [...cols, ...vals], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;

function printQuestionMarks(length, doub) {
  let qm = [];
  for (let i = 0; i < length; i++) {
    qm.push(doub ? '??' : '?');
  }
  return qm.join(', ');
}