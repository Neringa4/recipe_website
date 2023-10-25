import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './CategoryPage.css';

const CategoryPage = ({recipes, selectedCategory, fetchRecipes}) => {
    return(
    <div className="category-page">
        <h1 className="category-title">{selectedCategory} Recipes</h1>
        <div className="recipe-cards-list-container">
            <RecipeCardsList recipes={recipes.hits}/>
        </div>
        <PageButtons recipes={recipes} fetchRecipes={fetchRecipes}/>
    </div>
    )
}

export default CategoryPage;