import './App.css'
import {useEffect, useState} from "react";
import CategoryService from './services/categoryService'
import TwoLevel from "./components/TwoLevel";
import ThreeLevel from "./components/ThreeLevel";

function App() {
  //то, что получаем
  const [categoriesOneLevel, setCategoriesOneLevel] = useState([])
  const [categoriesTwoLevel, setCategoriesTwoLevel] = useState([])

  const [level, setLevel] = useState('1')//Выбор типа ввода

  const [currentId, setCurrentId] = useState('null') //Id категории
  const [currentIdTwo, setCurrentIdTwo] = useState('null') //Id подкатегории

  const [nameCat, setNameCat] = useState('')
  const [parentId, setParentId] = useState(null)
  const [features, setFeatures] = useState(null)

  useEffect(() => {
    if (level !== '1') {
      CategoryService.getCategoriesOneLevel()
        .then((data) => {
          setCategoriesOneLevel(data)
        })
      setNameCat('')
    }
  }, [level])

  useEffect(() => {
    CategoryService.getCategoriesTwoLevel(currentId)
      .then((data) => {
        setCategoriesTwoLevel(data)
      })
  }, [currentId])

  return (
    <div className="App">
      <select onChange={(e) => setLevel(e.target.value)}>
        <option value={1}>Категория 1 ур</option>
        <option value={2}>Категория 2 ур</option>
        <option value={3}>Категория 3 ур</option>
      </select>

      <form onSubmit={(e) => CategoryService.addCategory(e, nameCat, parentId, features)
        .then(() => {
          setNameCat('')
          setParentId(null)
          setFeatures(null)
          alert('Добавлено')
        })}>
        <h1>Форма создания</h1>
        {level === '1' ?
          <input type="text" placeholder='Введите название категории' value={nameCat}
                 onChange={(e) => setNameCat(e.target.value)}/>
          : level === '2' ?
            <TwoLevel categoriesOneLevel={categoriesOneLevel} setNameCat={setNameCat} nameCat={nameCat}
                      setParentId={setParentId}/>
            : level === '3' ?
              <ThreeLevel categoriesOneLevel={categoriesOneLevel} setParentId={setParentId} nameCat={nameCat}
                          categoriesTwoLevel={categoriesTwoLevel} setCurrentId={setCurrentId}
                          setNameCat={setNameCat}/> : null}
        <button type='submit'>Отправить</button>
      </form>
    </div>);
}

export default App;
