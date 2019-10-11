const express = require('express')
const { Producto } = require('../model/Tienda')

const app = express()

/*************************************************************/

const GET_ALL = () => {
  const URL = '/producto'
  return app.get(URL, (req, res) => {
    Producto.find((err, producto) => {
      res.json({
        producto,
      })
    })
  })
}

/*************************************************************/

const GET_ID = () => {
  const URL = '/producto/:id'
  return app.get(URL, (req, res) => {
    if (req.params.id != 'all') {
      Producto.find({ _id: req.params.id }, (err, producto) => {
        res.json({
          producto,
        })
      })
    } else {
      Producto.find({}, (err, producto) => {
        res.json({
          producto,
        })
      })
    }
  })
}

module.exports = { GET_ALL, GET_ID }
