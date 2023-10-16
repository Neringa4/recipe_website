import CategoryDropdown from './CategoryDropdown';
import styled from 'styled-components';
import {useState} from 'react';

const CategoryTitle = styled.h3`
    padding: 10px 50px 10px 0px;
`

const Category = ({category}) => {
    const name = Object.keys(category)[0];
    const title = name[0].toUpperCase() + name.slice(1).replace('Type', '');

    const [hover, setHover] = useState(false);

    return(
        <>
            <CategoryTitle 
                style={{textDecoration: hover ? 'underline' : 'none'}}
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}>
                {title}
            </CategoryTitle>
            {hover && <CategoryDropdown category={category} name={name}/>}
        </>
    )
}

export default Category;