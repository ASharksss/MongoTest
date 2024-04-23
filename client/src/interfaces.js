export const ICategory = (name, parentId = null, features = null) => {
  return {
    name, parent_id: parentId, features
  }
}

export const IFeatures = (name, values, required, type) => {
  return {
    name, values, required, type
  }
}

export const IFeatureValue = (name, slug) => {
  return {
    name, slug
  }
}