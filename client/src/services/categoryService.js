import axios from "axios";
import {ICategory, IFeatures, IFeatureValue} from "../interfaces";

class CategoryService {

  async getCategoriesOneLevel() {
    const {data} = await axios.get(`http://localhost:5000/api/category/getCategory?parent_id=null`)
    return data
  }

  async getCategoriesTwoLevel(currentId) {
    const {data} = await axios.get(`http://localhost:5000/api/category/getCategory?parent_id=${currentId}`)
    return data
  }

  async addCategory(e, name, parentId, features) {
    e.preventDefault()
    try {
      if (name.trim() === '') throw new Error('поле пустое');
      const newCategory = ICategory(name, parentId, features)
      const {data} = await axios.post('http://localhost:5000/api/category/addCategory', newCategory)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  async addFeature(e, name, required, type, values) {
    e.preventDefault()
    return IFeatures(name, values, required, type)

  }

  async addFeatureValues(e, name, slug) {
    e.preventDefault()
    return IFeatureValue(name, slug)
  }


}


export default new CategoryService()