const CategoryDropdown = ({category, name}) => {
    const handleCategoryClick = (e) => {
        const urlEnd = `&${category.name}=${3}`
        console.log(urlEnd)
        // useEffect(() => {
        //     fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=26766703&app_key=47f983e62ea1baa39bc519a368585b73${urlEnd}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // })
    }

    const dropdownList = category[name].map(value => {
        return(
            <li onClick={handleCategoryClick}>
                {value}
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