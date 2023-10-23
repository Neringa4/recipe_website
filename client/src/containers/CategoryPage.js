import RecipeCardsList from "../components/RecipeCardsList";
import './CategoryPage.css';

const CategoryPage = ({recipes, selectedCategory}) => {
    return(
    <>
        <h1 className="category-title">{selectedCategory} Recipes</h1>
        <div className="recipe-cards-list-container">
            <RecipeCardsList recipes={recipes}/>
        </div>
    </>
    )
}

export default CategoryPage;