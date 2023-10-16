import Category from "./Category";
import './CategoryBar.css'

const CategoriesBar = ({categories}) => {
    const categoryNodes = categories.map((category, index) => {
        return(
            <li key={index}>
                <Category category={category}/>
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