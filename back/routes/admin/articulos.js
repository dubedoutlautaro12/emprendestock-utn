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

router.get('/borrar/:id', async (req,res,next)=>{
  var id = req.params.id;
  await articulosModel.deleteArticulos(id)
  res.redirect('/admin/articulos')
})


router.get('/modificar/:id', async (req,res,next)=>{
  var id = req.params.id;
  var articulo = await articulosModel.getArticulo(id)
  res.render('admin/modificar', {
    layout: 'admin/layout',
    articulo 
  })
})

router.post('/modificar', async (req, res, next)=> {
  try{
    var obj = {
      emprendimiento: req.body.emprendimiento,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      valor: req.body.valor
    }

    await articulosModel.modificacionArticulo(obj, req.body.id);
    res.redirect('/admin/articulos');

  }catch (error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el articulo'
    })
  }
})


module.exports = router;

