import React, {useState} from 'react';
import CategoryService from "../services/categoryService";
import ValueBlock from "./ValueBlock";

const FeatureBlock = () => {

  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)
  const [type, setType] = useState('enter')
  const [values, setValues] = useState([])
  const [components, setComponents] = useState([<ValueBlock setValues={setValues}/>])

  const addComponent = () => {
    setComponents([...components, <ValueBlock setValues={setValues}/>])
  }
  console.log(values)

  return (
    <>
      <div className='feature_block'>
        <input className='feature_input' type="text" placeholder='Название характеристики'
               onChange={(e) => setName(e.target.value)}/>
        <div className='flex items-center checkbox'>
          <input type="checkbox" id="required" name="required"
                 onChange={(e) => setRequired(e.target.checked)}/>
          <label htmlFor="required">Обязательное</label>
        </div>
        <select className='feature_select' onChange={(e) => setType(e.target.value)}>
          <option value="" disabled>Тип</option>
          <option value="enter">Enter</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>

      {
        type !== 'enter' ?
          <div>
            <h3>Введите значения характеристик</h3>
            <button className='add_value' type='button' onClick={addComponent}>+</button>
            <div className='flex column'>
              {components.map(component => component)}
            </div>
          </div>
          : null
      }

      <button type='button' onClick={(e) => CategoryService.addFeature(e, name, required, type, values)
        .then(data => console.log(data))}>Привязать
      </button>
    </>

  );
};

export default FeatureBlock;