import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './ResultsPage.css';

const ResultsPage = ({recipes, setRecipes, selectRecipe}) => {
    return(
        <div className="page">
            <div>
                <h1 className="page-title">Search Results</h1>
                <div className="recipe-cards-list-container">
                    <RecipeCardsList recipes={recipes.hits} selectRecipe={selectRecipe}/>
                </div>
                <PageButtons recipes={recipes} setRecipes={setRecipes}/>
            </div>
        </div>
    )
}

export default ResultsPage;