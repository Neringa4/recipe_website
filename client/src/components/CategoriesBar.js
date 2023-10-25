import Category from "./Category";
import './CategoriesBar.css'

const CategoriesBar = ({categories, fetchRecipes, selectCategory}) => {
    const categoryNodes = categories.map((category, index) => {
        return(
            <li key={index}>
                <Category category={category} fetchRecipes={fetchRecipes} selectCategory={selectCategory}/>
            </li>
        )
    })

    return(
        <ul className="category-bar">
            {categoryNodes}
        </ul>
    )
}

export default CategoriesBar;