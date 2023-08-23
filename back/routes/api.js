var express = require('express');
var router = express.Router();
var articulosModel = require("../models/articulosModel")
var util = require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/articulos', async function (req, res, next) {

    var articulos = await articulosModel.getArticulos();

    articulos = articulos.map(articulo => {
        if (articulo.img_id) {
            const imagen = cloudinary.image(articulo.img_id, {
                width: 960,
                height: 200,
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

    res.json(articulos)

});

module.exports= router