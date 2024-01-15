import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './ResultsPage.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ResultsPage = ({recipes, setRecipes, fetchRecipes, handleRecipeClick, mostPopularRecipes}) => {
    const params = useParams();

    useEffect(() => {
        fetchRecipes(params.input, '');
    }, [params.input])

    const searchTerm = params.input.match(/(?<=&q=)[a-z]+/i)
    const searchLabels = params.input.match(/(?<=&mealType=|&dishType=|&cuisineType=|&diet=|&health=)[a-z ]+/ig)

    if (searchLabels) {
        var labels = searchLabels.map((label, index) => {
            const upperLabel = label[0].toUpperCase() + label.slice(1)
            return (
                <li className="health-label" key={index}>{upperLabel} <i className="fa-solid fa-check"></i></li>
            )
        })
    }

    return(
        <div className="page">
            <div className="results-page">
                <h1 className="page-title">Search Results{searchTerm && ` for '${searchTerm}'`}</h1>
                <ul className="health-labels">
                    {searchLabels && labels}
                </ul>
                {recipes.hits.length > 0 ? 
                    <div className="recipe-cards-list-container">
                        <RecipeCardsList recipes={recipes.hits} handleRecipeClick={handleRecipeClick}/>
                    </div> :
                    <div className="no-results-container">
                        <hr/>
                        <h2>Sorry! There are no results matching your criteria.</h2>
                        <div className="search-suggestions">
                            <h4>Search suggestions:</h4>
                            <ul>
                                <li><p>Check for typos and spelling errors.</p></li>
                                <li><p>Try different keywords.</p></li>
                                <li><p>Try to be less specific with keywods and/or filters.</p></li>
                            </ul>
                        </div>
                        <div className="popular-recipes-container">
                            <hr/>
                            <h2>Popular Recipes</h2>
                            {mostPopularRecipes.length > 0 && <RecipeCardsList recipes={mostPopularRecipes.slice(0, 8)} handleRecipeClick={handleRecipeClick}/>}
                        </div>
                    </div>
                }
                <PageButtons recipes={recipes} setRecipes={setRecipes}/>
            </div>
        </div>
    )
}

export default ResultsPage;