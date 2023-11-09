import './PageButtons.css';

const PageButtons = ({recipes, setRecipes}) => {
    const handleClick = () => {
        fetch(recipes._links.next.href)
        .then(res => res.json())
        .then(data => {
            const recipesCopy = {...recipes}
            recipesCopy.hits.push(...data.hits)
            if ('next' in data._links) {
                recipesCopy._links.next.href = data._links.next.href
            } else {
                recipesCopy._links = {}
            }
            setRecipes(recipesCopy)
        })
    }

    return(
        <div className="buttons-container">
            {'next' in recipes._links ? <button className="button" onClick={handleClick}>Load More</button> : ''}
        </div>
    )
}

export default PageButtons;