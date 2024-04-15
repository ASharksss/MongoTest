const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const feature_router = require('./routes/featureRouter')
const app = express()

const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api/feature', feature_router)

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