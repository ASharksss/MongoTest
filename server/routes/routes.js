const Router = require('express')
const router = new Router()
const feature_router = require('./featureRouter')
const category_router = require('./categoryRouter')

router.use('/feature', feature_router)
router.use('/category', category_router)

module.exports = router
