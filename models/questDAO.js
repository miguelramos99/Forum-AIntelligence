var mysql = require('./connection').pool;

module.exports.tec = function (tec, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT valor, opcao1, opcao2, opcao3, opcao4, p_idpergunta from pergunta, questionario, tecnica_has_questionario, tecnica, resposta where questionario_idquestionario=idquestionario and pergunta_idpergunta=idpergunta and tecnica_idtecnica=idtecnica and p_idpergunta=idpergunta and resposta_idrespostas=idresposta and nome=?",  tec, function (err, rows) {
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
module.exports.radios = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT certa from pergunta, questionario, tecnica_has_questionario, tecnica, resposta where questionario_idquestionario=idquestionario and pergunta_idpergunta=idpergunta and tecnica_idtecnica=idtecnica and p_idpergunta=idpergunta and resposta_idrespostas=idresposta and nome=? and p_idpergunta=?",  [obj.tec,obj.radios], function (err, rows) {
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

