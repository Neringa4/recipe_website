import AdvancedSearchCategory from "../components/AdvancedSearchCategory";
import './AdvancedSearchPage.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AdvancedSearchPage = ({categories, fetchRecipes}) => {

    const [searchInput, setSearchInput] = useState('');
    const [inputList, setInputList] = useState([]);
    const [allSelectedLabels, setAllSelectedLabels] = useState({
        Meals: [],
        Dishes: [],
        Cuisine: [],
        Diet: [],
        Health: []
    });

    const navigate = useNavigate();

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

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
    });

    return(
        <div className="page" id="adv-srch-page">
            <form className="adv-srch-form" onSubmit={handleAdvancedSearchSubmit}>
                <div className="search-bar home-bar">
                    <input type="search" name="search" className="search-input adv-input" pattern=".*\S.*" autoComplete="off" value={searchInput} onChange={handleSearchInput}/>
                    <button className="search-btn" ><i className="fa fa-search"></i></button>
                </div>
                <ul className="adv-srch-cat-container">
                    {searchCategories}
                </ul>
                <input className="button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AdvancedSearchPage;