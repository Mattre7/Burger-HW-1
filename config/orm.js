var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {
    selectAll: function (input, callback) {
        connection.query('SELECT * FROM burgers;', function (err, data) {
            if (err) throw err;

            callback(data);
        });
    },
    selectOne: function (burgerID, callback) {
        connection.query('SELECT * FROM burgers WHERE id = ?', burgerID, function (err, data) {
           if (err) throw err;
           
           callback(data);
        });
    },
    insertOne: function (burgerName, callback) {
        connection.query('INSERT INTO burgers (burger_name) VALUES (?)', burgerName, function (err, data) {
            if (err) throw err;

            callback(data);
        });
    },
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', burgerID, function(err, data) {
            console.log("Updating burger with id: " + burgerID);
            if (err) throw err;
            
            callback(data);
        })
    }
}

module.exports = orm;
