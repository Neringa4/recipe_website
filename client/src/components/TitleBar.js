import styled from 'styled-components';

const Title = styled.h1`
    background-color: #61677A;
    color: white;
    font: Roboto;
    margin: 0px;
    padding: 25px 25%;
`

const TitleBar = () => {
    return(
        <Title>Recipes</Title>
    )
}

export default TitleBar;