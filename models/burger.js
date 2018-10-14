var orm = require("../config/orm.js");

var burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        });
    },
    insertOne: function (burgername, cb) {
        orm.insertOne(burgername, function(data) {
            cb(data);
        });
    },
    updateOne: function (burgerID, cb) {
        orm.updateOne(burgerID, function(data) {
            cb(data);
        });
    }
}

module.exports = burgers;