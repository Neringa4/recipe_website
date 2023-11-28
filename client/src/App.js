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

  const handleRecipeClick = (recipe) => {
    const recipeId = recipe.uri.match(/recipe_[a-z0-9]+/i)[0]
    const baseUrl = 'http://localhost:9000/api/recipes/'
  
    setSelectedRecipe(recipe);
    
    fetch(baseUrl + recipeId)
    .then(res => res.json())
    .then(data => {
      if (data) {
        const recipeUpdated = JSON.parse(JSON.stringify(data));
        recipeUpdated.clicks += 1;
        delete recipeUpdated._id
        fetch(baseUrl + recipeId, {
          method: 'PUT',
          body: JSON.stringify(recipeUpdated),
          headers: { 'Content-Type': 'application/json'}
        })
      } else {
        const recipeCopy = {}
        recipeCopy.recipe = JSON.parse(JSON.stringify(recipe));
        recipeCopy.recipe_id = recipeId;
        recipeCopy.clicks = 1;
        fetch(baseUrl, {
          method: 'POST',
          body: JSON.stringify(recipeCopy),
          headers: { 'Content-Type': 'application/json'}
        });
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:9000/api/recipes/')
    .then(res => res.json())
    .then(data => setMostPopularRecipes(data));
  }, []);

  return (
    <BrowserRouter>
      <Header categories={categories} fetchRecipes={fetchRecipes} selectCategory={setSelectedCategory}/>
      <Routes>
        <Route path="/" element={<HomePage mostPopularRecipes={mostPopularRecipes} handleRecipeClick={handleRecipeClick}/>}/>
        <Route path="/recipes/:label" element={<RecipePage recipe={selectedRecipe}/>}/>
        <Route path="/categories/:displayTitle" element={<CategoryPage recipes={recipes} selectedCategory={selectedCategory} setRecipes={setRecipes} handleRecipeClick={handleRecipeClick}/>}/>
        <Route path="/search/:input" element={<ResultsPage recipes={recipes} setRecipes={setRecipes} handleRecipeClick={handleRecipeClick}/>}/>
        <Route path="/advanced-search" element={<AdvancedSearchPage categories={categories} fetchRecipes={fetchRecipes}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
