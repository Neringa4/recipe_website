import './Dropdown.css';
import DropdownCategory from './DropdownCategory';

const CategoryDropdown = ({category, name, fetchCategories, selectCategory}) => {
    const dropdownList = category[name].map((value, index) => {
        return(
            <li key={index}>
                <DropdownCategory category={value} fetchCategories={fetchCategories} selectCategory={selectCategory}/>
            </li>
        )
    })
    return(
        <ul className="dropdown">
            {dropdownList}
        </ul>
    )
}

export default CategoryDropdown;