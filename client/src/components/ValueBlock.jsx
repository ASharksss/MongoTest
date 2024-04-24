import React, {useEffect, useState} from 'react';

const ValueBlock = ({setValues, values}) => {

  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')

  const saveValue = () => {
    if (name === '' && slug === '') return;
    setValues(prev => [...prev, {name, slug}])
  }

  return (
    <div className='value_block'>
      <div className='flex items-center'>
        <input type="text" placeholder='Название значения'
               onChange={event => setName(event.target.value)}/>
        <input type="text" placeholder='slug'
               onChange={event => setSlug(event.target.value)}/>
        <button type='button' onClick={saveValue}>сохранить</button>
        <button type='button'>удалить</button>
      </div>
    </div>
  );
};

export default ValueBlock;