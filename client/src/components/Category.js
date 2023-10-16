import CategoryDropdown from './CategoryDropdown';
import {useState} from 'react';
import './Category.css';

const Category = ({category}) => {
    const name = Object.keys(category)[0];
    const title = name[0].toUpperCase() + name.slice(1).replace('Type', '');

    const [hover, setHover] = useState(false);

    return(
        <>
            <h3 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}>
                {title}
            </h3>
            {hover && <CategoryDropdown category={category} name={name}/>}
        </>
    )
}

export default Category;