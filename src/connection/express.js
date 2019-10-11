const express = require('express')
const bodyParser = require('body-parser')

// Import CRUD-FUNCTIONS
const { POST } = require('../controller/POST')
const { GET_ALL, GET_ID } = require('../controller/GET')
const { PUT } = require('../controller/PUT')
const { DELETE } = require('../controller/DELETE')

const app = express()
// const port = process.env || 3000
const port = 3000

// JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CRUD
app.use(POST())
app.use(GET_ALL())
app.use(GET_ID())
app.use(PUT())
app.use(DELETE())

const isEnabledExpress = () => {
  return new Promise((resolve, reject) => {
    app
      .listen(port, response => resolve(true))
      .on('error', error => reject(false))
  })
}

module.exports = { isEnabledExpress }
