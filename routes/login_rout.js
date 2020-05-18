var express = require('express');
var router = express.Router();
var authenDAO = require('../models/loginDAO');

router.post('/log', function (req, res, next) {
  authenDAO.login(req.body, function (status, result) {
    if (status.code == 200)
      res.send(result);
    else {
      res.statusMessage = status.status;
      res.status(status.code).send({});
    }
  });
});

module.exports = router;