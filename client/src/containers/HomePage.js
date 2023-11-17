import RecipeDetailsCard from "../components/RecipeDetailsCard";
import RecipeCardsList from "../components/RecipeCardsList";
import './HomePage.css';

const MainPage = ({mostPopularRecipes}) => {

    const mostPopularRecipesSorted = JSON.parse(JSON.stringify(mostPopularRecipes)).sort((a, b) => {
            const x = a.clicks; 
            const y = b.clicks;
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    )

    return(
        <div className="page">
            <div className="most-pop-container">
                {mostPopularRecipes.length > 0 && <RecipeDetailsCard recipe={mostPopularRecipesSorted[0]}/>}
            </div>
        </div>
    )
}

export default MainPage;