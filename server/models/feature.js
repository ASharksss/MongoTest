const mongoose = require("mongoose");


const feature_schema = mongoose.Schema({
  name: String,
  required: Boolean,
  values: [{
    name: String
  }]
})

module.exports = mongoose.model('Feature', feature_schema)