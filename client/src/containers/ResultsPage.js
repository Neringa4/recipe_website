import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './ResultsPage.css';

const ResultsPage = ({recipes, setRecipes}) => {
    return(
        <div className="page">
            <h1 className="results-title">Search Results</h1>
            <div className="recipe-cards-list-container">
                <RecipeCardsList recipes={recipes.hits}/>
            </div>
            <PageButtons recipes={recipes} setRecipes={setRecipes}/>
        </div>
    )
}

export default ResultsPage;