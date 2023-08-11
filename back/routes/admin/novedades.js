var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('admin/novedades', { //login.hbs
    layout: 'admin/layout', //hace q vaya a un layout distinto (layout.hbs)
    persona: req.session.nombre
  });
});

module.exports = router;

