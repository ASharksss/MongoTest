const Router = require('express')
const categoryController = require('../contoller/categoryController')
const router = new Router()

router.post('/addCategory', categoryController.addCategory)
router.get('/getCategory', categoryController.getCategories)


module.exports = router
