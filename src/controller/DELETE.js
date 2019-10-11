const express = require('express')
const { Producto } = require('../model/Tienda')

const app = express()

const URL = '/producto/:id'

const DELETE = () => {
  return app.delete(URL, (req, res) => {
    if (req.params.id != 'all') {
      Producto.findByIdAndRemove(req.params.id, (err, producto) => {
        if (err) {
          res.json({
            estado: 'error',
            message: 'Error al eliminar el producto',
          })
        } else {
          res.json({
            estado: 'OK',
            message: 'Producto eliminado de la base de datos',
          })
        }
        if (producto === null) {
          res.json({
            estado: 'error',
            message: 'Producto no encontrado',
          })
        }
      })
    } else {
      Producto.remove({}, (err, producto) => {
        if (err) {
          res.json({
            estado: 'error',
            message: 'Error al eliminar productos',
          })
        } else {
          res.json({
            estado: 'OK',
            message: 'Productos eliminados de la BD',
          })
        }
        if (producto === null) {
          res.json({
            estado: 'error',
            message: 'Productos no encontrados',
          })
        }
      })
    }
  })
}

module.exports = { DELETE }
