import './PageButtons.css';

const PageButtons = ({recipes, setRecipes}) => {
    const handleClick = () => {
        fetch(recipes._links.next.href)
        .then(res => res.json())
        .then(data => {
            const recipesCopy = {...recipes}
            recipesCopy.hits.push(...data.hits)
            recipesCopy._links.next.href = data._links.next.href
            setRecipes(recipesCopy)
        })
    }

    return(
        <div className="buttons-container">
            <a className="load-more" onClick={handleClick}>Load More</a>
        </div>
    )
}

export default PageButtons;