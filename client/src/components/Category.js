import CategoryDropdown from './Dropdown';
import {useState} from 'react';
import './Category.css';

const Category = ({category, fetchCategories, selectCategory}) => {
    const name = Object.keys(category)[0];
    return(
        <>
            <h3>
                {name}
            </h3>
            <CategoryDropdown category={category} name={name} fetchCategories={fetchCategories} selectCategory={selectCategory}/>
        </>
    )
}

export default Category;