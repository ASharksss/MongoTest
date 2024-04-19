import React, {useState} from 'react';
import CategoryService from "../services/categoryService";

const FeatureBlock = () => {

  const [name, setName] = useState('')
  const [required, setRequired] = useState(false)
  const [type, setType] = useState('enter')
  const [values, setValues] = useState(null)

  let valueData = values?.split(" ").map(n => n.replace(/[.,!\n]/g, '')).filter(n => n !== "")

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
      <div className="features_values">
        <textarea onChange={(e) => setValues(e.target.value)}></textarea>
      </div>
      <button type='button' onClick={(e) => CategoryService.addFeature(e, name, required, type, valueData)
        .then(data => console.log(data))}>Привязать</button>
    </>

  );
};

export default FeatureBlock;