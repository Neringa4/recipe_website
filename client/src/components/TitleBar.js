import './TitleBar.css';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

const TitleBar = ({fetchRecipes}) => {
    return(
        <>
            <Link to="/" id="header-title-link">
                <h1 id="header-title">RecipeDatabase</h1>
            </Link>
            <SearchBar fetchRecipes={fetchRecipes}/>
        </>
    )
}

export default TitleBar;