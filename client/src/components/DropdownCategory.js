import './DropdownCategory.css';
import {Link} from 'react-router-dom';

const DropdownCategory = ({category, fetchCategories, selectCategory}) => {

    const handleOnClick = () => {
        const url = category.url
        selectCategory(category.displayTitle)
        fetchCategories(url)
    }
    return(
        <Link to={`/categories/${category.displayTitle}`} className="dropdown-link">
            <p onClick={handleOnClick}>
                {category.displayTitle}
            </p>
        </Link>
    )
}

export default DropdownCategory;