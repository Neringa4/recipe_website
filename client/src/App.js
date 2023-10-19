import "./App.css"
import Header from "./containers/Header";
import MainPage from "./containers/MainPage";
import RecipePage from "./containers/RecipePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import categories from './categories.js';

function App() {
  // const [categories, setCategories] = useState([
  //   {Meals: []},
  //   {Dishes: []},
  //   {Cuisines: []},
  //   {Diet: []},
  //   {Health: []}
  // ]);
  
  // useEffect(() => {
  //   fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
  //   .then(res => res.json())
  //   .then(data => {
  //     const newData = [10, 11, 9, 7, 8].map((i) => {
  //       const types = data.paths["/api/recipes/v2"].get.parameters[i].items.enum
  //       const title = data.paths["/api/recipes/v2"].get.parameters[i].name
  //       return({[title]: types})
  //     })
  //     setCategories(categories.map((cat, index) => {
  //       const catKey = Object.keys(categories[index])[0]
  //       const urlKey = Object.keys(newData[index])[0]
  //       cat[catKey] = newData[index][urlKey].map(type => {
  //         return({displayTitle: type, url: `&${urlKey}=${type}`})
  //       })
  //       return(cat)
  //     }))
  //   })
  // }, [])

  return (
    <BrowserRouter>
      <Header categories={categories}/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/recipes/:label" element={<RecipePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
