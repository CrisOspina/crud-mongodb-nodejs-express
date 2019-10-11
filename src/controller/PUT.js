const express = require('express')
const { Producto } = require('../model/Tienda')

const app = express()

const URL = '/producto/:id'

const PUT = () => {
  return app.put(URL, (req, res) => {
    let producto = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      codigo: req.body.codigo,
    }

    const id = req.params.id

    Producto.findByIdAndUpdate(
      id,
      producto,
      {
        new: true,
        context: 'query',
      },
      (err, producto) => {
        if (err) {
          res.json({
            estado: 'error',
            message: 'Error al actualizar el registro en la DB',
            error: err,
          })
        } else {
          res.json({
            estado: 'OK',
            message: 'Fue actualizado con exito',
          })
        }
      }
    )
  })
}

module.exports = { PUT }
