import TitleBar from "../components/TitleBar";
import CategoriesBar from "../components/CategoriesBar";
import { useEffect, useState } from "react";

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.edamam.com/doc/open-api/recipe-search-v2.json")
        .then(res => res.json())
        .then(data => setCategories([7, 8, 9, 10, 11].map(index => {
            const categoryName = data.paths["/api/recipes/v2"].get.parameters[index].name
            const categoryValues = data.paths["/api/recipes/v2"].get.parameters[index].items.enum
            return(
                {[categoryName]: categoryValues}
            )
        })))
    }, [])

    return(
        <>
            <TitleBar/>
            <CategoriesBar categories={categories}/>
        </>
    )
}

export default Header;