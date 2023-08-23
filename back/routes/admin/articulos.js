var express = require('express');
var router = express.Router();
var articulosModel = require('../../models/articulosModel')
var util = require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/', async function (req, res, next) {

  var articulos = await articulosModel.getArticulos();

  articulos = articulos.map(articulo => {
    if (articulo.img_id) {
      const imagen = cloudinary.image(articulo.img_id, {
        width: 100,
        height: 100,
        crop: "fill"
      })
      return {
        ...articulo,
        imagen
      }
    } else {
      return {
        ...articulo,
        imagen: "NC"
      }
    }

  })

  res.render('admin/articulos', { //login.hbs
    layout: 'admin/layout', //hace q vaya a un layout distinto (layout.hbs)
    persona: req.session.nombre,
    articulos
  });
});

router.get('/new', (req, res, next) => {
  res.render('admin/new', {
    layout: 'admin/layout'
  })
})

router.post('/new', async (req, res, next) => {
  try {
    var img_id = ""
    console.log(req.files.imagen);
    if (req.files.imagen && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.emprendimiento != "" && req.body.nombre != "" && req.body.descripcion != "" && req.body.valor != "" && req.body.emprendimiento != "") {
      await articulosModel.insertArticulos({
        ...req.body,
        img_id
      });
      res.redirect('/admin/articulos')
    } else {
      res.render('admin/new', {
        layout: 'admin/layout',
        error: true,
        message: 'Completar todos los campos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el articulo'
    })
  }
})

router.get('/borrar/:id', async (req, res, next) => {
  var id = req.params.id;
  let articulo = await articulosModel.getArticulo(id)
  if(articulo.img_id){
    await(destroy(articulo.img_id))
  }
  await articulosModel.deleteArticulos(id)
  res.redirect('/admin/articulos')
})


router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var articulo = await articulosModel.getArticulo(id)
  res.render('admin/modificar', {
    layout: 'admin/layout',
    articulo
  })
})

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original
    let borrar_img_antigua = false

    if (req.body.img_delete === "1") {
      img_id = null
      borrar_img_antigua = true
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen
        img_id = (await uploader(imagen.tempFilePath)).public_id
        borrar_img_antigua = true
      }
    }
    if (borrar_img_antigua && req.body.img_original) {
      await (destroy(req.body.img_original))
    }

    var obj = {
      emprendimiento: req.body.emprendimiento,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      valor: req.body.valor,
      img_id
    }

    await articulosModel.modificacionArticulo(obj, req.body.id);
    res.redirect('/admin/articulos');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el articulo'
    })
  }
})


module.exports = router;

