const Router = require('express')
const Feature = require('../models/feature')
const router = new Router()


router.post('/post', async (req, res) => {
  try {
    const {name, required, values} = req.body
    const new_feature = await Feature.findOne({name})
    if (new_feature) {
      return res.status(400).json({message: `feature with this name ${name} already exist`})
    }
    const feature = new Feature({name, required, values})
    await feature.save()
    return res.json(feature)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router