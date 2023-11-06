const RecipeDetailsCard = ({recipe}) => {
    console.log(recipe)
    return(
        <>
            <img src={recipe.images.REGULAR.url} alt={recipe.label}></img>
        </>
    )
}

export default RecipeDetailsCard;