import React, {useState} from 'react';
import CategoryService from "../services/categoryService";
import ValueBlock from "./ValueBlock";

const FeatureBlock = ({setRequired, setValues, setType, setName, values}) => {


  const [typeFeature, setTypeFeature] = useState('enter')
  const [components, setComponents] = useState([<ValueBlock setValues={setValues} values={values}/>])

  const addComponent = () => {
    setComponents([...components, <ValueBlock setValues={setValues} values={values}/>])
  }

  return (
    <>
      <div className='feature_block'>
        <input className='feature_input' type="text" placeholder='Название характеристики'
               onChange={(e) => setName(e.target.value)}/>
        <div className='flex items-center checkbox'>
          <input type="checkbox" name="required"
                 onChange={(e) => setRequired(e.target.checked)}/>
          <label htmlFor="required">Обязательное</label>
        </div>
        <select className='feature_select' onChange={(e) => {
          setType(e.target.value)
          setTypeFeature(e.target.value)
        }}>
          <option value="" disabled>Тип</option>
          <option value="enter">Enter</option>
          <option value="select">Select</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>

      {
        typeFeature !== 'enter' ?
          <div>
            <h3>Введите значения характеристик</h3>
            <button className='add_value' type='button' onClick={addComponent}>+</button>
            <div className='flex column'>
              {components.map(component => component)}
            </div>
          </div>
          : null
      }

    </>
  );
};

export default FeatureBlock;