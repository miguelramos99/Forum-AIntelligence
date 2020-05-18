var mysql = require('./connection').pool;
module.exports.login = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select username, password from utilizador where username=? and password=?", [obj.nome, obj.password], function (err, rows) {
            console.log(rows);
            console.log(obj);
            conn.release();
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 401, status: "User or password incorrects" }, null);
            }
        })
    })
}
