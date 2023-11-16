import "./App.css"
import Header from "./components/Header.js";
import HomePage from "./containers/HomePage.js";
import RecipePage from "./containers/RecipePage";
import CategoryPage from "./containers/CategoryPage";
import ResultsPage from "./containers/ResultsPage";
import AdvancedSearchPage from "./containers/AdvancedSearchPage.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import categories from './categories.js';
import {app_key, app_id} from './keys.js';

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

  const [recipes, setRecipes] = useState({
    from: 0,
    to: 0,
    count: 0,
    _links: {},
    hits: []
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [mostPopularRecipes, setMostPopularRecipes] = useState([]);

  const fetchRecipes = (urlExt, url) => {
    if (url) {
      fetch(url)
      .then(res => res.json())
      .then(res => setRecipes(res))
    } else {
      fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}${urlExt}`)
      .then(res => res.json())
      .then(res => setRecipes(res))
    }
  }

  const selectCategory = (category) => {
    setSelectedCategory(category);
  }

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }

  useEffect(() => {
    fetch('http://localhost:9000/api/recipes/')
    .then(res => res.json())
    .then(data => setMostPopularRecipes(data));
  }, []);

  return (
    <BrowserRouter>
      <Header categories={categories} fetchRecipes={fetchRecipes} selectCategory={selectCategory}/>
      <Routes>
        <Route path="/" element={<HomePage mostPopularRecipes={mostPopularRecipes}/>}/>
        <Route path="/recipes/:label" element={<RecipePage recipe={selectedRecipe}/>}/>
        <Route path="/categories/:displayTitle" element={<CategoryPage recipes={recipes} selectedCategory={selectedCategory} setRecipes={setRecipes} selectRecipe={selectRecipe}/>}/>
        <Route path="/search/:input" element={<ResultsPage recipes={recipes} setRecipes={setRecipes} selectRecipe={selectRecipe}/>}/>
        <Route path="/advanced-search" element={<AdvancedSearchPage categories={categories} fetchRecipes={fetchRecipes}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
