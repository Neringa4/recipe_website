import AdvancedSearchCategory from "../components/AdvancedSearchCategory";
import './AdvancedSearchPage.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AdvancedSearchPage = ({categories, fetchRecipes}) => {

    const [allSelectedLabels, setAllSelectedLabels] = useState({
        Meals: [],
        Dishes: [],
        Cuisine: [],
        Diet: [],
        Health: []
    })

    const navigate = useNavigate();

    const handleAdvancedSearchSubmit = (e) => {
        e.preventDefault();
        const urlExt = Object.values(allSelectedLabels).flat().join('')
        fetchRecipes(urlExt, '')
        navigate(`/search/advanced-search`)
    }

    const searchCategories = categories.map((category, index) => {
        return(
            <li key={index}>
                <AdvancedSearchCategory category={category} allSelectedLabels={allSelectedLabels} setAllSelectedLabels={setAllSelectedLabels}/>
                <hr/>
            </li>
        )
    })

    return(
        <div className="page" id="adv-srch-page">
            <form className="adv-srch-form" onSubmit={handleAdvancedSearchSubmit}>
                <ul className="adv-srch-cat-container">
                    {searchCategories}
                </ul>
                <input className="button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AdvancedSearchPage;