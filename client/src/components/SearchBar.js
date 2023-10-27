import { useRouteLoaderData } from 'react-router-dom';
import './SearchBar.css';
import {useState} from 'react';

const SearchBar = ({fetchRecipes}) => {

    const [searchInput, setSearchInput] = useState('')

    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlExt = `&q=${searchInput}`;
        fetchRecipes(urlExt, '');
        setSearchInput('')
    }

    return(
        <form action="" className="search-bar" onSubmit={handleSubmit}>
	        <input type="search" name="search" pattern=".*\S.*" required value={searchInput} onChange={handleInput}/>
	        <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default SearchBar;