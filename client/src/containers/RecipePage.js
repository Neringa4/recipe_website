import RecipeDetailsCard from "../components/RecipeDetailsCard";
import './RecipePage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {app_key, app_id} from '../keys.js';

const RecipePage = () => {
    const [recipe, setRecipe] = useState({});
    const params = useParams();
    console.log(params)
    
    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2/${params.recipeId}?type=public&app_id=${app_id}&app_key=${app_key}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, [params])
    
    return(
        <div className="page">
            <div className="recipe-details-container">
                {Object.keys(recipe).length > 0 && <RecipeDetailsCard recipe={recipe.recipe} home={false}/>}
            </div>
        </div>
    )
}

export default RecipePage;