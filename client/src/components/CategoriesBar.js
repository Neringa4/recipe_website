import Category from "./Category";
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    padding: 10px 25%;
    background-color: #D8D9DA;
`

const CategoriesBar = ({categories}) => {
    const categoryNodes = categories.map((category, index) => {
        return(
            <li key={index}>
                <Category category={category}/>
            </li>
        )
    })

    return(
        <List>
            {categoryNodes}
        </List>
    )
}

export default CategoriesBar;