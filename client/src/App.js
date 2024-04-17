import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import TwoLevel from "./components/TwoLevel";
import ThreeLevel from "./components/ThreeLevel";

function App() {
  //то, что получаем
  const [categoriesOneLevel, setCategoriesOneLevel] = useState([])
  const [categoriesTwoLevel, setCategoriesTwoLevel] = useState([])
  const [level, setLevel] = useState('1')// Выбор типа ввода
  const [currentId, setCurrentId] = useState('null') //Id категории
  const [currentIdTwo, setCurrentIdTwo] = useState('null') //Id подкатегории
  const [nameCat, setNameCat] = useState('')

  const nol = null
  const getCategoriesOneLevel = () => {
    axios.get(`http://localhost:5000/api/category/getCategory?parent_id=null`)
      .then((res) => {
        setCategoriesOneLevel(res.data)
      })
  }
  const getCategoriesTwoLevel = (currentId) => {
    axios.get(`http://localhost:5000/api/category/getCategory?parent_id=${currentId}`)
      .then((res) => {
        setCategoriesTwoLevel(res.data)
      })
  }

  useEffect(() => {
    if (level !== '1') {
      getCategoriesOneLevel()
    }
  }, [level])

  useEffect(() => {
    getCategoriesTwoLevel(currentId)
  }, [currentId])

  console.log('Квартира ' + currentIdTwo)
  return (<div className="App">
    <select onChange={(e) => setLevel(e.target.value)}>
      <option value={1}>Категория 1 ур</option>
      <option value={2}>Категория 2 ур</option>
      <option value={3}>Категория 3 ур</option>
    </select>

    <form action="">
      <h1>Форма создания</h1>
      {level === '1' ? <input type="text" placeholder='Введите название категории' value={nameCat}
                              onChange={(e) => setNameCat(e.target.value)}/>
        : level === '2' ?
          <TwoLevel categoriesOneLevel={categoriesOneLevel} setNameCat={setNameCat} nameCat={nameCat}/>
          : level === '3' ?
            <ThreeLevel categoriesOneLevel={categoriesOneLevel} setCurrentIdTwo={setCurrentIdTwo} nameCat={nameCat}
                        categoriesTwoLevel={categoriesTwoLevel} setCurrentId={setCurrentId} setNameCat={setNameCat}/> : null}
      <button>Отправить</button>
    </form>


  </div>);
}

export default App;
