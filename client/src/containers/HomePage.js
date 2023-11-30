import RecipeDetailsCard from "../components/RecipeDetailsCard";
import RecipeCardsList from "../components/RecipeCardsList";
import './HomePage.css';
import {Link} from 'react-router-dom';

const MainPage = ({mostPopularRecipes, handleRecipeClick}) => {

    return(
        <div className="page">
            <div className="home-container">
                <div className="most-pop-container">
                    {mostPopularRecipes.length > 0 && <RecipeDetailsCard recipe={mostPopularRecipes[0].recipe} home={true} handleRecipeClick={handleRecipeClick}/>}
                </div>
                <h2>Popular Recipes</h2>
                <div className="runner-up-container">
                    {mostPopularRecipes.length > 0 && <RecipeCardsList recipes={mostPopularRecipes.slice(1, 13)} handleRecipeClick={handleRecipeClick}/>}
                </div>
            </div>
        </div>
    )
}

export default MainPage;