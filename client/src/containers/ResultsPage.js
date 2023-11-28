import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './ResultsPage.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ResultsPage = ({recipes, setRecipes, fetchRecipes, handleRecipeClick}) => {
    const searchTerm = useParams();

    useEffect(() => {
        fetchRecipes(searchTerm.input, '');
    }, [searchTerm.input])

    return(
        <div className="page">
            <div>
                <h1 className="page-title">Search Results</h1>
                <div className="recipe-cards-list-container">
                    <RecipeCardsList recipes={recipes.hits} handleRecipeClick={handleRecipeClick}/>
                </div>
                <PageButtons recipes={recipes} setRecipes={setRecipes}/>
            </div>
        </div>
    )
}

export default ResultsPage;