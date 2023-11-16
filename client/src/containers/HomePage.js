import MostPopularRecipeCard from "../components/MostPopularRecipeCard";
import RecipeCardsList from "../components/RecipeCardsList";

const MainPage = ({mostPopularRecipes}) => {

    const mostPopularRecipesSorted = JSON.parse(JSON.stringify(mostPopularRecipes)).sort((a, b) => {
            const x = a.clicks; 
            const y = b.clicks;
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    )

    return(
        <div>
            {mostPopularRecipes.length > 0 && mostPopularRecipesSorted[0].label}
        </div>
    )
}

export default MainPage;