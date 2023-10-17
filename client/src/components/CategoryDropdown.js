import './CategoryDropdown.css';

const CategoryDropdown = ({category, name}) => {
    const dropdownList = category[name].map(value => {
        return(
            <li>
                {value}
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