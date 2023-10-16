const CategoryDropdown = ({category, name}) => {
    const dropdownList = category[name].map(x => {
        return(
            <li>
                {x}
            </li>
        )
    })
    return(
        <ul>
            {dropdownList}
        </ul>
    )
}

export default CategoryDropdown;