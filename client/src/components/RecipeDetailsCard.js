import './RecipeDetailsCard.css';
import {Link} from 'react-router-dom';

const RecipeDetailsCard = ({recipe, home, handleRecipeClick}) => {
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

    const nutritionLabels = Object.values(nutrition).map((nutrient, index) => {
        return(
            <li key={index} className="nutrition-label">
                <p>{nutrient.label}</p>
                <p className="nutrient-quantity">{nutrient.quantity/recipe.yield > 1 ? 
                        Math.round(nutrient.quantity/recipe.yield) : 
                        (nutrient.quantity/recipe.yield).toFixed(2)} 
                    {nutrient.unit}
                </p>
            </li>
        )
    })

    const ingredients = recipe.ingredientLines.map((line, index) => {
        const ingredient = line.replace(/^\* /, '')
        return(
            <li className="ingredient" key={index}>- {ingredient}</li>
        )
    })
        
    const healthLabels = recipe.healthLabels.map((label, index) => {
        return(
            <li className="health-label" key={index}>{label} <i className="fa-solid fa-check"></i></li>
        )
    })

    return(
        <section className="recipe-details-card">
            {home ? 
                <Link to={`/recipes/${recipe.label}`} className="image-link">
                <svg className="top-shape">
                    <polygon points="50 0, 50 60, 25 40, 0 60, 0 0"/>
                </svg>
                <p className="top">TOP</p>
                    <img src={recipe.images.REGULAR.url} alt={recipe.label} onClick={() => handleRecipeClick(recipe)}></img>
                </Link> :
                <img src={recipe.images.REGULAR.url} alt={recipe.label}></img>
            }
            <div className="recipe-details">
                {home ? 
                    <Link to={`/recipes/${recipe.label}`}><h2 onClick={() => handleRecipeClick(recipe)}>{recipe.label}</h2></Link> :
                    <h2>{recipe.label}</h2>
                }
                <p className="full-recipe-link">Full Recipe: <a className="recipe-source-link" href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a></p>
                <p><i className="fa fa-basket-shopping"></i> {recipe.ingredients.length} {recipe.ingredients.length > 1 ? "Ingredients" : "Ingredient"}</p>
                {recipe.totalTime > 0 && <p><i className="fa fa-clock"></i> Time: {recipe.totalTime} mins</p>}
                <p><i className="fa fa-utensils"></i> {recipe.yield} {recipe.yield > 1 ? "Servings" : "Serving"}</p>
                <ul className="nutrition-container">{nutritionLabels}</ul>
            </div>
            {!home && 
                <>
                <div className="ingredient-container">
                    <h2>Ingredients</h2>
                    <ul>{ingredients}</ul>
                </div>
                <div className="label-method-container">
                    <div>
                        <h2>Method</h2>
                        <p>Full recipe can be found at <a className="recipe-source-link" href={recipe.url} target="_blank" rel="noreferrer">{recipe.source}</a>.</p>
                    </div>
                    <ul className="health-labels">{healthLabels}</ul>
                </div>
                </>
            }
        </section>
    )
}

export default RecipeDetailsCard;