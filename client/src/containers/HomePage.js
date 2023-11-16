import MostPopularRecipeCard from "../components/MostPopularRecipeCard";
import RecipeCardsList from "../components/RecipeCardsList";

const MainPage = ({mostPopularRecipes}) => {

    return(
        <div>
            {mostPopularRecipes[0].recipe.label}
        </div>
    )
}

export default MainPage;