import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import {useState} from 'react';

const SearchBar = ({fetchRecipes}) => {

    const [searchInput, setSearchInput] = useState('')

    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchInput) {
            const urlExt = `&q=${searchInput}`;
            fetchRecipes(urlExt, '');
            navigate(`/search/${searchInput}`)
            setSearchInput('')
        }
    }

    return(
        <form action="" className="search-bar" onSubmit={handleSubmit}>
	        <input type="search" name="search" pattern=".*\S.*" autoComplete="off" value={searchInput} onChange={handleInput}/>
	        <button className="search-btn" type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default SearchBar;