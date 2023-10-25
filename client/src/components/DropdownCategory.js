import './DropdownCategory.css';
import {Link} from 'react-router-dom';

const DropdownCategory = ({category, fetchRecipes, selectCategory}) => {

    const handleOnClick = () => {
        selectCategory(category.displayTitle);
        fetchRecipes(category.url, '');
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