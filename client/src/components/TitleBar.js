import './TitleBar.css';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const TitleBar = ({fetchRecipes}) => {
    return(
        <div className="header-container">
            <Link to="/" id="header-title-link">
                <h1 id="header-title">RecipeDatabase</h1>
            </Link>
            <div className="search-container">
                <SearchBar fetchRecipes={fetchRecipes}/>
                <span className="divider"></span>
                <Link to="/advanced-search" id="advanced-search-link">Advanced Search</Link>
            </div>
        </div>
    )
}

export default TitleBar;