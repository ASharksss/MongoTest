const mongoose = require('mongoose')
const {ObjectId} = require("mongodb");

const features_schema = mongoose.Schema({
  name: String,
  values: [{name: String}],
  required: Boolean,
  type: String
})

const category_schema = mongoose.Schema({
  name: String,
  parent_id: {type: ObjectId, default: null},
  features: [features_schema]
})

module.exports = mongoose.model('Category', category_schema)