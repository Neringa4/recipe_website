import {Link} from 'react-router-dom';
import './PageButtons.css';

const PageButtons = ({recipes, fetchRecipes}) => {

    return(
        <div className="buttons-container">
            <a className="previous">&laquo; Previous</a>
            <a href="#" className="next" onClick={() => fetchRecipes('', recipes._links.next.href)}>Next &raquo;</a>
        </div>
    )
}

export default PageButtons;