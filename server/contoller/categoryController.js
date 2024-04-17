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

  async getCategories(req, res, next) {
    try {
      let {parent_id} = req.query
      if (parent_id.trim() === 'null') parent_id = null // проверяем текст на содержания null и превращаем в null
      const categories = await Category.find({parent_id: parent_id})
      return res.json(categories)
    }catch (e) {
      return res.json(e)
    }

  }

}

module.exports = new CategoryController()