import Dropdown from './Dropdown';
import {useState} from 'react';
import './Category.css';

const Category = ({category, fetchRecipes, selectCategory}) => {
    const name = Object.keys(category)[0];
    return(
        <>
            <h3>
                {name}
            </h3>
            <Dropdown category={category} name={name} fetchRecipes={fetchRecipes} selectCategory={selectCategory}/>
        </>
    )
}

export default Category;