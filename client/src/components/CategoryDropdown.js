import './CategoryDropdown.css';

const CategoryDropdown = ({category, name}) => {
    const dropdownList = category[name].map((value, index) => {
        return(
            <li key={index}>
                {value.displayTitle}
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