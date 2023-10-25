import TitleBar from "../components/TitleBar";
import CategoriesBar from "../components/CategoriesBar";
import './Header.css';

const Header = ({categories, fetchRecipes, selectCategory}) => {
    return(
        <>
            <div id="title-bar">
                <TitleBar/>
            </div>
            <div id="categories-bar">
                <CategoriesBar categories={categories} fetchRecipes={fetchRecipes} selectCategory={selectCategory}/>
            </div>
        </>
    )
}

export default Header;