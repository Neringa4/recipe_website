import styled from 'styled-components';

const CategoryTitle = styled.h3`
    padding-right: 50px;
`

const Category = ({category}) => {
    const name = Object.keys(category)[0].replace('Type', '')
    const title = name[0].toUpperCase() + name.slice(1)

    return(
        <CategoryTitle>{title}</CategoryTitle>
    )
}

export default Category;