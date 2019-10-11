const { isEnabledExpress } = require('./connection/express')
const { isConnectMongoDB } = require('./connection/mongodb')

isEnabledExpress()
  .then(res => console.log(`http === Success`))
  .catch(err => console.log(`http === Failed`))

isConnectMongoDB()
  .then(res => console.log(`mongodb === Success`))
  .catch(err => console.log(`mongodb === Failed`))
