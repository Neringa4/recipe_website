import TitleBar from "./TitleBar";
import CategoriesBar from "./CategoriesBar";
import './Header.css';

const Header = ({categories, fetchRecipes}) => {
    return(
        <>
            <div id="title-bar">
                <TitleBar fetchRecipes={fetchRecipes}/>
            </div>
            <div id="categories-bar">
                <CategoriesBar categories={categories} fetchRecipes={fetchRecipes}/>
            </div>
        </>
    )
}

export default Header;