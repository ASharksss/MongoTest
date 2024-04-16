const Category = require('../models/categories')

class CategoryController {

  async addCategory(req, res, next) {
    try {
      const {name, parent_id, features} = req.body
      const category = new Category({name, parent_id, features})
      await category.save()
      return res.json(category)
    } catch (e) {
      console.log(e)
      return res.json(e.message)
    }
  }
}

module.exports = new CategoryController()