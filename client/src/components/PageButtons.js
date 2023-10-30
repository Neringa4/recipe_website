import './PageButtons.css';

const PageButtons = ({recipes, setRecipes}) => {
    const handleClick = () => {
        fetch(recipes._links.next.href)
        .then(res => res.json())
        .then(data => {
            const recipesCopy = {...recipes}
            recipesCopy.hits.push(...data.hits)
            if (Object.keys(data._links).length > 0) {
                recipesCopy._links.next.href = data._links.next.href
            } else {
                recipesCopy._links = {}
            }
            setRecipes(recipesCopy)
        })
    }

    return(
        <div className="buttons-container">
            {Object.keys(recipes._links).length > 0 ? <a className="load-more" onClick={handleClick}>Load More</a> : ''}
        </div>
    )
}

export default PageButtons;