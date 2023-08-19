var express = require('express');
var router = express.Router();
var articulosModel = require('../../models/articulosModel')


router.get('/', async function(req, res, next) {

  var articulos = await articulosModel.getArticulos();

  res.render('admin/articulos', { //login.hbs
    layout: 'admin/layout', //hace q vaya a un layout distinto (layout.hbs)
    persona: req.session.nombre,
    articulos
  });
});

router.get('/new', (req, res, next)=>{
  res.render('admin/new',{
  layout: 'admin/layout'
  })
})

router.post('/new', async (req, res, next)=>{
  try{
    if(req.body.emprendimiento != "" && req.body.nombre != "" && req.body.descripcion !="" && req.body.valor !="" && req.body.emprendimiento !="" ){
      await articulosModel.insertArticulos(req.body);
      res.redirect('/admin/articulos')
    } else{
      res.render('admin/new',{
        layout:'admin/layout',
        error: true,
        message: 'Completar todos los campos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el articulo'
    })
  }
})


module.exports = router;

