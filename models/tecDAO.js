var mysql = require('./connection').pool;

module.exports.tec = function (tec, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select informação from tecnica where nome=?",  tec, function (err, rows) {
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

module.exports.insertcomment = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Insert into comentario(utilizador_idUtilizador, data, assunto, mensagem, tecnica_idtecnicas) values (?,curdate(),?,?,?)",  [obj.idutilizador, obj.assunto, obj.mensagem, obj.idtecnica], function (err, rows) {
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

module.exports.revealcomment = function (tec, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT assunto, mensagem, data, username FROM comentario,tecnica, utilizador WHERE tecnica_idtecnicas=idtecnica and nome=? and utilizador_idUtilizador=idutilizador", tec, function (err, rows) {
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
module.exports.GetId = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT idutilizador, idtecnica FROM `utilizador`, tecnica  WHERE username=? and nome=?", [obj.username, obj.tecnica], function (err, rows) {
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





