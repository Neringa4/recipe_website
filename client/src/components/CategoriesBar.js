import Category from "./Category";
import './CategoriesBar.css'

const CategoriesBar = ({categories, fetchCategories, selectCategory}) => {
    const categoryNodes = categories.map((category, index) => {
        return(
            <li key={index}>
                <Category category={category} fetchCategories={fetchCategories} selectCategory={selectCategory}/>
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