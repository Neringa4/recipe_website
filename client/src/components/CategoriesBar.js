import Category from "./Category";
import './CategoriesBar.css'

const CategoriesBar = ({categories, fetchRecipes}) => {
    const categoryNodes = categories.map((category, index) => {
        return(
            <li key={index}>
                <Category category={category} fetchRecipes={fetchRecipes}/>
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