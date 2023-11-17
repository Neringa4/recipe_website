import './RecipeCard.css';
import {Link} from 'react-router-dom';

const RecipeCard = ({recipe, selectRecipe}) => {
    const recipeId = recipe.uri.match(/recipe_[a-z0-9]+/i)[0]

    const handleRecipeClick = () => {
        selectRecipe(recipe);

        const baseUrl = 'http://localhost:9000/api/recipes/'
        
        fetch(baseUrl + recipeId)
        .then(res => res.json())
        .then(data => {
            if (data) {
                console.log(data);
                const recipe = JSON.parse(JSON.stringify(data));
                recipe.clicks += 1;
                delete recipe._id
                fetch(baseUrl + recipeId, {
                    method: 'PUT',
                    body: JSON.stringify(recipe),
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

    return(
        <div className="recipe-card">
            <Link to={`/recipes/${recipe.label}`}><img src={recipe.images.REGULAR.url} alt={recipe.label} onClick={handleRecipeClick}></img></Link>
            <div className="recipe-card-details">
                <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>
                <Link to={`/recipes/${recipe.label}`}><h4 onClick={handleRecipeClick}>{recipe.label}</h4></Link>
            </div>
        </div>
    )
}

export default RecipeCard;