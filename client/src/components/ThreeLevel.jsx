import React, {useState} from 'react';
import FeatureBlock from "./FeatureBlock";
import CategoryService from "../services/categoryService";

const ThreeLevel = ({
                      categoriesOneLevel, categoriesTwoLevel, setCurrentId, setParentId,
                      nameCat, setNameCat,
                    }) => {

  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)
  const [type, setType] = useState('enter')
  const [values, setValues] = useState([])

  const [feature, setFeature] = useState([])
  const [components, setComponents] = useState([<FeatureBlock setName={setName} setRequired={setRequired} type={type}
                                                              setType={setType} setValues={setValues}
                                                              values={values}/>])
  const saveFeature = (e) => {
    CategoryService.addFeature(e, name, required, type, values)
      .then(data => {
        setFeature(prev => [...prev, data])
        console.log(data)
      })

  }
  const addComponent = () => {
    setComponents([...components,
      <FeatureBlock setName={setName} setRequired={setRequired} values={values} type={type}
                    setType={setType} setValues={setValues}/>])

    saveFeature()
  }

  return (
    <div className='flex column'>
      <div className='flex items-center'>
        <select className='select_category' onChange={(e) => setCurrentId(e.target.value)}>
          <option value="null">Выберите</option>
          {
            categoriesOneLevel.map((item, index) => (
              <option key={index} value={item._id}>{item.name}</option>
            ))
          }
        </select>
        <select className='select_category' onChange={(e) => setParentId(e.target.value)}>
          <option value="null">Выберите</option>
          {
            categoriesTwoLevel.map((item, index) => (
                <option key={index} value={item._id}>{item.name}</option>
              )
            )
          }
        </select>
        <input type="text" placeholder='Введите название категории' value={nameCat}
               onChange={(e) => setNameCat(e.target.value)}/>
      </div>

      <div className='features_block'>
        <h1>Привяжите характеристики</h1>
        <button type='button' onClick={addComponent}>+</button>
        {
          components.map(component => <div className="features">{component}</div>)
        }
        <button type='button' onClick={(e) => saveFeature(e)}>Привязать</button>
      </div>
      {
        feature.map(item => (
          <div className='border'>
            {item.name}
            {
              item.values.map(value => (
                <div>{value.name}</div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default ThreeLevel;