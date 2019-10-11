const express = require('express')
const { Producto } = require('../model/Tienda')

const app = express()

const URL = '/producto'

/*************************************************************/

const POST = () =>
  app.post(URL, (req, res) => {
    let producto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      codigo: req.body.codigo,
    })

    // Deesctruturation objetc for validation
    const { nombre, precio, codigo } = producto

    validateRequiredFields(nombre, precio, codigo, res)

    insertDataDB(producto, res)
  })

/*************************************************************/

const validateRequiredFields = (nombre, precio, codigo, res) => {
  if (nombre === undefined || precio === undefined || codigo === undefined) {
    res.json({
      message: 'Todos los campos obligatorios',
    })
  }
  return
}

const insertDataDB = (producto, res) =>
  producto.save((err, producto) => {
    if (err) {
      res.json({
        estado: 'error',
        message: 'Error en el registro',
      })
      console.log('error')
    } else {
      res.json({
        estado: 'OK',
        message: 'Registro insertado exitosamente',
        id: producto._id,
      })
      console.log('Registro insertado')
    }
  })

module.exports = { POST }
