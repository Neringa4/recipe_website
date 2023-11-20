import RecipeCardsList from "../components/RecipeCardsList";
import PageButtons from "../components/PageButtons";
import './CategoryPage.css';

const CategoryPage = ({recipes, selectedCategory, setRecipes, selectRecipe}) => {
    return(
    <div className="page">
        <div>
            <h1 className="page-title">{selectedCategory} Recipes</h1>
            <div className="recipe-cards-list-container">
                <RecipeCardsList recipes={recipes.hits} selectRecipe={selectRecipe}/>
            </div>
            <PageButtons recipes={recipes} setRecipes={setRecipes}/>
        </div>
    </div>
    )
}

export default CategoryPage;