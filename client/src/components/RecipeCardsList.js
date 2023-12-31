import RecipeCard from "./RecipeCard";
import './RecipeCardsList.css';

const RecipeCardsList = ({recipes, handleRecipeClick}) => {
    const recipeList = recipes.map((recipe, index) => {
        return(
            <li key={index}><RecipeCard recipe={recipe.recipe} handleRecipeClick={handleRecipeClick}/></li>
        )
    })
    return(
        <ul className="recipe-cards-list">
            {recipeList}
        </ul>
    )
}

export default RecipeCardsList;