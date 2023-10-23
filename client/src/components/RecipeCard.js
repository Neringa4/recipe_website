import './RecipeCard.css';

const RecipeCard = ({recipe}) => {
    return(
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label}></img>
            <h4>{recipe.label}</h4>
            <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>
        </div>
    )
}

export default RecipeCard;