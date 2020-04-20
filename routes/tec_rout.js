var express = require('express');
var router = express.Router();
var authenDAO = require('../models/tecDao');

router.get('/:tec', function (req, res, next) {
  var tec=req.params.tec
  authenDAO.tec(tec, function (result) {
    res.send(result);
  });
});

module.exports = router;