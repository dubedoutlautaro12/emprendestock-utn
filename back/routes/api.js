var express = require('express');
var router = express.Router();
var articulosModel = require("../models/articulosModel")
var cloudinary = require("cloudinary").v2;
var nodemailer = require('nodemailer')



router.get('/articulos', async function (req, res, next) {

    let articulos = await articulosModel.getArticulos();

    articulos = articulos.map(articulo => {
        if (articulo.img_id) {
            const imagen = cloudinary.url(articulo.img_id, {
                width: 300,
                height: 300,
                crop: "fill"
            })
            return {
                ...articulo,
                imagen
            }
        } else {
            return {
                ...articulo,
                imagen: ""
            }
        }
    })

    res.json(articulos)

});

router.post('/contact', async (req, res) => {
    const mail = {
        to: 'lautydube@gmail.com',
        subject: 'Contacto Web UTN',
        html: `${req.body.nombre} Se contacto con el formulario de contacto. Su consulta es la siguiente ${req.body.mensaje}
        sus datos son ${req.body.mail} y ${req.body.telefono}. `
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado con exito!'
    })

})



module.exports = router



