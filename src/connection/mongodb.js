const mongoose = require('mongoose')

const isConnectMongoDB = async () => {
  const URL = 'mongodb://localhost/tienda'
  return mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(res => true)
    .catch(err => console.log(error))
}

module.exports = { isConnectMongoDB }
