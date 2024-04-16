const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const routes = require('./routes/routes')
const app = express()

const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api', routes)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUri'))
    app.listen(PORT, () => {
      console.log('Port started')
    })
  } catch (e) {
    console.log(e)
  }

}

start().catch(err => console.log(err));