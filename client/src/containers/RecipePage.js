import RecipeDetailsCard from "../components/RecipeDetailsCard";
import './RecipePage.css';

const RecipePage = ({recipe}) => {
    return(
        <div className="page">
            <div className="recipe-details-container">
                <RecipeDetailsCard recipe={recipe}/>
            </div>
        </div>
    )
}

export default RecipePage;