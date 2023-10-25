import './RecipeCard.css';

const RecipeCard = ({recipe}) => {
    return(
        <div className="recipe-card">
            <img src={recipe.images.REGULAR.url} alt={recipe.label}></img>
            <div className="recipe-card-details">
                <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>
                <h4>{recipe.label}</h4>
            </div>
        </div>
    )
}

export default RecipeCard;