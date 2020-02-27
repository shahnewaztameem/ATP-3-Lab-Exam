var db = require('./db');


module.exports = {
    get: function(userId, callback) {
        var sql = "select * from users where user_id=?";
        db.getResults(sql, [userId], function(result) {
            if (result.length > 0) {
                callback(result[0]);
            } else {
                callback([]);
            }
        });
    },

    getAll: function(callback) {
        var sql = "select * from users";
        db.getResults(sql, [], function(results) {
            callback(results);
        });
    },

    validate: function(user, callback) {
        var sql = "select * from users where user_email=? and user_password =?";
        db.getResults(sql, [user.u_email, user.u_pass], function(result) {
            if (result.length > 0) {
                callback(result[0]);
            } else {
                callback([]);
            }
        })
    },

    insert: function(user, callback) {
        var sql = "INSERT into users values(null,?,?,?,?,?,?,?,?)";
        db.execute(sql, [user.name,
            user.u_email,
            user.user_type,
            user.relationship_status,
            user.u_pass, user.u_location,
            user.u_gender,
            user.u_birthday
        ], function(success) {
            callback(success);
        });
    }
}