import './RecipeDetailsCard.css';

const RecipeDetailsCard = ({recipe}) => {
    const s = {...recipe.totalNutrients}

    let nutrition = {
        energy: s.ENERC_KCAL,
        fat: s.FAT,
        saturates: {
            label: 'Saturates',
            quantity: s.FASAT.quantity,
            unit: s.FASAT.unit
        },
        carbs: s.CHOCDF,
        sugars: s.SUGAR,
        fibre: s.FIBTG,
        protein: s.PROCNT,
        salt: {
            label: 'Salt',
            quantity: s.NA.quantity * 2.5 / 1000,
            unit: 'g'
        }
    }

    const nutritionLabels = Object.values(nutrition).map(nutrient => {
        return(
            <li>
                <p>{nutrient.label}</p>
                <p>{nutrient.quantity/recipe.yield > 1 ? 
                        Math.round(nutrient.quantity/recipe.yield) : 
                        (nutrient.quantity/recipe.yield).toFixed(2)} 
                    {nutrient.unit}
                </p>
            </li>
        )
    })

    const ingredients = recipe.ingredientLines.map((line) => {
        const ingredient = line.replace(/^\* /, '')
        return(
            <li className="ingredient">{ingredient}</li>
        )
    })
        
    const healthLabels = recipe.healthLabels.map((label) => {
        return(
            <li className="health-label">{label}</li>
        )
    })

    return(
        <section className="recipe-details-card">
            <img src={'LARGE' in recipe.images ? recipe.images.LARGE.url : recipe.images.REGULAR.url} alt={recipe.label}></img>
            <div className="recipe-details">
                <h2>{recipe.label}</h2>
                <p>Full Recipe: <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a></p>
                {recipe.totalTime > 0 && <p>Time: {recipe.totalTime} mins</p>}
                <p>Servings: {recipe.yield}</p>
                <div>
                    <ul className="nutrition-container">{nutritionLabels}</ul>
                </div>
            </div>
            <div className="ingredient-container">
                <h2>{recipe.ingredients.length} Ingredients</h2>
                <ul>{ingredients}</ul>
            </div>
            <div className="label-method-container">
                <div>
                    <h2>Method</h2>
                    <p>Full recipe can be found at <a href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a></p>
                </div>
                <ul className="health-labels">{healthLabels}</ul>
            </div>
        </section>
    )
}

export default RecipeDetailsCard;