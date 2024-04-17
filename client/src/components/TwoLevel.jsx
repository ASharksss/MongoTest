import React, {useState} from 'react';

const TwoLevel = ({categoriesOneLevel, setNameCat, nameCat}) => {

  return (
    <div className='flex column'>
      <label htmlFor="">Выберите родителя</label>
      <select>
        <option value="null">Выберите</option>
        {
          categoriesOneLevel.map((item, index) => (
            <option key={index} value={item._id}>{item.name}</option>
          ))
        }

      </select>
      <input type="text" placeholder='Введите название категории' value={nameCat}
             onChange={(e) => setNameCat(e.target.value)}/>
    </div>

  );
};

export default TwoLevel;