import TitleBar from "../components/TitleBar";
import CategoriesBar from "../components/CategoriesBar";

const Header = ({categories, fetchCategories, selectCategory}) => {
    return(
        <>
            <TitleBar/>
            <CategoriesBar categories={categories} fetchCategories={fetchCategories} selectCategory={selectCategory}/>
        </>
    )
}

export default Header;