import './TitleBar.css';
import {Link} from 'react-router-dom';

const TitleBar = () => {
    return(
        <Link to="/" id="header-title-link">
            <h1 id="header-title">RecipeDatabase</h1>
        </Link>
    )
}

export default TitleBar;