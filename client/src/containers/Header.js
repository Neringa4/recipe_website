import TitleBar from "../components/TitleBar";
import CategoriesBar from "../components/CategoriesBar";
import './Header.css';

const Header = ({categories, fetchCategories, selectCategory}) => {
    return(
        <>
            <div id="title-bar">
                <TitleBar/>
            </div>
            <div id="categories-bar">
                <CategoriesBar categories={categories} fetchCategories={fetchCategories} selectCategory={selectCategory}/>
            </div>
        </>
    )
}

export default Header;