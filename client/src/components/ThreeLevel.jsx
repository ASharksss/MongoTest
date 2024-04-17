import React from 'react';

const ThreeLevel = ({categoriesOneLevel, categoriesTwoLevel, setCurrentId, setCurrentIdTwo, nameCat, setNameCat}) => {
  return (
    <div className='flex column'>
      <select onChange={(e) => setCurrentId(e.target.value)}>
        <option value="null">Выберите</option>
        {
          categoriesOneLevel.map((item, index) => (
            <option key={index} value={item._id}>{item.name}</option>
          ))
        }
      </select>
      <select onChange={(e) => setCurrentIdTwo(e.target.value)}>
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
      <div>
        <input type="text" placeholder='Название характеристики'/>
        <div className='flex items-center checkbox'>
          <input type="checkbox" id="required" name="required"/>
          <label htmlFor="required">Обязательное</label>
        </div>

        <select name="" id="">
          <option value="">Тип</option>
        </select>
      </div>
    </div>
  );
};

export default ThreeLevel;