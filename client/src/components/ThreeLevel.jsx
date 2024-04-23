import React from 'react';
import FeatureBlock from "./FeatureBlock";

const ThreeLevel = ({categoriesOneLevel, categoriesTwoLevel, setCurrentId, setParentId,
                      nameCat, setNameCat}) => {
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

      <div className='features'>
        <h1>Привяжите характеристики</h1>
        <FeatureBlock/>
      </div>
    </div>
  );
};

export default ThreeLevel;