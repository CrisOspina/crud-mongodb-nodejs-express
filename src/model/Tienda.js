const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  nombre: {},
  precio: {},
  codigo: {},
})

const Producto = mongoose.model('productos', productSchema)

module.exports = { Producto }
