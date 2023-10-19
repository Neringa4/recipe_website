import './TitleBar.css';
import {Link} from 'react-router-dom';

const TitleBar = () => {
    return(
        <Link to="/" id="title-link">
            <h1>Recipes</h1>
        </Link>
    )
}

export default TitleBar;