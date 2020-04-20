var mysql = require('./connection').pool;

module.exports.tec = function (tec, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select valor from pergunta where id=?",  tec, function (err, rows) {
            conn.release();
            if (!(rows.length === 0)) {
                callback(rows,{ code: 200, status: "Ok" });
            }
            else {
                callback({ code: 404, status: "Tecnica nao encontrada" }, null);
            }
        })
    })
}

