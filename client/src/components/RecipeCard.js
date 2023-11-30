import './RecipeCard.css';
import {Link} from 'react-router-dom';

const RecipeCard = ({recipe, handleRecipeClick}) => {
    const recipeId = recipe.uri.match(/(?<=recipe_).*/)[0]

    return(
        <div className="recipe-card">
            <Link to={`/recipes/${recipeId}`}><img src={recipe.images.REGULAR.url} alt={recipe.label} onClick={() => handleRecipeClick(recipe)}></img></Link>
            <div className="recipe-card-details">
                <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>
                <Link to={`/recipes/${recipeId}`}><h4 onClick={() => handleRecipeClick(recipe)}>{recipe.label}</h4></Link>
            </div>
        </div>
    )
}

export default RecipeCard;