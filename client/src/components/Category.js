import CategoryDropdown from './CategoryDropdown';
import {useState} from 'react';
import './Category.css';

const Category = ({category}) => {
    const name = Object.keys(category)[0];
    return(
        <>
            <h3>
                {name}
            </h3>
            <CategoryDropdown category={category} name={name}/>
        </>
    )
}

export default Category;