import "./App.css"
import Header from "./components/Header.js";
import HomePage from "./containers/HomePage.js";
import RecipePage from "./containers/RecipePage";
import CategoryPage from "./containers/CategoryPage";
import ResultsPage from "./containers/ResultsPage";
import AdvancedSearchPage from "./containers/AdvancedSearchPage.js";
import {Routes, Route, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import categories from './categories.js';
import {app_key, app_id} from './keys.js';

function App() {

  const [recipes, setRecipes] = useState({
    from: 0,
    to: 0,
    count: 0,
    _links: {},
    hits: []
  });
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

  const handleRecipeClick = (recipe) => {
    const recipeId = recipe.uri.match(/(?<=recipe_).*/)[0]
    const baseUrl = 'http://localhost:9000/api/recipes/'
    
    fetch(baseUrl + recipeId, {
      method: 'PUT',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json'}
    })
  }

  useEffect(() => {
    fetch('http://localhost:9000/api/recipes/')
    .then(res => res.json())
    .then(data => setMostPopularRecipes(data));
  }, []);

  return (
    <>
      <Header categories={categories} fetchRecipes={fetchRecipes}/>
      <Routes>
        <Route path="/" element={<HomePage mostPopularRecipes={mostPopularRecipes} handleRecipeClick={handleRecipeClick}/>}/>
        <Route path="/recipes/:recipeId" element={<RecipePage/>}/>
        <Route path="/categories/:displayTitle" element={<CategoryPage recipes={recipes} setRecipes={setRecipes} fetchRecipes={fetchRecipes} handleRecipeClick={handleRecipeClick}/>}/>
        <Route path="/search/:input" element={<ResultsPage recipes={recipes} setRecipes={setRecipes} handleRecipeClick={handleRecipeClick} fetchRecipes={fetchRecipes}/>}/>
        <Route path="/advanced-search" element={<AdvancedSearchPage categories={categories} fetchRecipes={fetchRecipes}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
