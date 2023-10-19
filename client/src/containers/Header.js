import TitleBar from "../components/TitleBar";
import CategoriesBar from "../components/CategoriesBar";

const Header = ({categories}) => {
    return(
        <>
            <TitleBar/>
            <CategoriesBar categories={categories}/>
        </>
    )
}

export default Header;