import './RecipeCard.css';
import {Link} from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    return(
        <div className="recipe-card">
            <Link to={`/recipes/${recipe.label}`}><img src={recipe.images.REGULAR.url} alt={recipe.label}></img></Link>
            <div className="recipe-card-details">
                <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>
                <Link to={`/recipes/${recipe.label}`}><h4>{recipe.label}</h4></Link>
            </div>
        </div>
    )
}

export default RecipeCard;