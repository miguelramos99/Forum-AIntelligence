var express = require('express');
var router = express.Router();
var authenDAO = require('../models/tecDAO');

router.get('/:tec', function (req, res, next) {
  var tec=req.params.tec
  authenDAO.tec(tec, function (result) {
    res.send(result);
  });
});

router.post('/comment', function (req, res, next) {
  authenDAO.insertcomment(req.body, function (result) {
    res.send(result);
  });
});

router.post('/id', function (req, res, next) {
  authenDAO.GetId(req.body, function (result) {
    res.send(result);
  });
});

router.get('/reveal/:tec', function (req, res, next) {
  var tec=req.params.tec
  authenDAO.revealcomment(tec, function (result) {
    res.send(result);
  });
});


module.exports = router;