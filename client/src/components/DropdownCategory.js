import './DropdownCategory.css';
import {Link} from 'react-router-dom';

const DropdownCategory = ({category}) => {
    return(
        <Link to={`/categories/${category.url}`} className="dropdown-link">
            <p >
                {category.displayTitle}
            </p>
        </Link>
    )
}

export default DropdownCategory;