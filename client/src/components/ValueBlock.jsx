import React, {useEffect, useState} from 'react';
import CategoryService from "../services/categoryService";

const ValueBlock = ({setValues, values}) => {

  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')

  const saveValue = (e) => {
    if (name === '' && slug === '') return;
    CategoryService.addFeatureValues(e, name, slug)
      .then(data => setValues(prev => [...prev, data]))
   /* setValues(prev => [...prev, {name, slug}])*/
  }

  return (
    <div className='value_block'>
      <div className='flex items-center'>
        <input type="text" placeholder='Название значения'
               onChange={event => setName(event.target.value)}/>
        <input type="text" placeholder='slug'
               onChange={event => setSlug(event.target.value)}/>
        <button type='button' onClick={e => saveValue(e)}>сохранить</button>
        <button type='button'>удалить</button>
      </div>
    </div>
  );
};

export default ValueBlock;