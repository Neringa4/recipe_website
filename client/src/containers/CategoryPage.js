import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './CategoryPage.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CategoryPage = ({recipes, setRecipes, handleRecipeClick, fetchRecipes}) => {
    const selectedCategory = useParams();
    const displayName = selectedCategory.displayTitle.replace(/^&[a-z]+=/i, '')

    useEffect(() => {
        fetchRecipes(selectedCategory.displayTitle, '');
    }, [selectedCategory.displayTitle])

    return(
    <div className="page">
        <div>
            <h1 className="page-title">{displayName[0].toUpperCase() + displayName.slice(1)} Recipes</h1>
            <div className="recipe-cards-list-container">
                <RecipeCardsList recipes={recipes.hits} handleRecipeClick={handleRecipeClick}/>
            </div>
            <PageButtons recipes={recipes} setRecipes={setRecipes}/>
        </div>
    </div>
    )
}

export default CategoryPage;