import './Dropdown.css';
import DropdownCategory from './DropdownCategory';
import {Link} from 'react-router-dom';

const CategoryDropdown = ({category, name, fetchRecipes, selectCategory}) => {

    const dishes = ['Desserts', 'Drinks', 'Main Course', 'Salad', 'Sandwitches', 'Soup', 'Starter']
    const cuisine = ['Chinese', 'French', 'Indian', 'Italian', 'Japanese', 'Mexican']
    const health = ['Dairy-free', 'Gluten-free', 'High-fibre', 'High-protein', 'Low-fat', 'Low-sodium', 'Low-sugar']

    const categoryTrim = {...category};
    if (name === 'Dishes') {
        categoryTrim[name] = category[name].filter(category => dishes.includes(category.displayTitle))
    } else if (name === 'Cuisine') {
        categoryTrim[name] = category[name].filter(category => cuisine.includes(category.displayTitle))
    } else if (name === 'Health') {
        categoryTrim[name] = category[name].filter(category => health.includes(category.displayTitle))
    }

    const dropdownList = categoryTrim[name].map((value, index) => {
        return(
            <li key={index}>
                <DropdownCategory category={value} fetchRecipes={fetchRecipes} selectCategory={selectCategory}/>
            </li>
        )
    })
    return(
        <ul className="dropdown">
            {dropdownList}
            {['Dishes', 'Cuisine', 'Health'].includes(name) && <li><Link to="/advanced-search" className="more-link">View More</Link></li>}
        </ul>
    )
}

export default CategoryDropdown;