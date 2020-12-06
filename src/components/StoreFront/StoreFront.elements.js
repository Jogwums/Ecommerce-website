import styled from 'styled-components'

export const StoreFrontContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border: 2px solid grey;
    min-height: 100vh;
    margin-top: 0;
    margin-bottom: 20px;
`;

export const ItemHeader = styled.header`
    font-size: 2rem;
    margin: 0 2rem;
    padding: 3rem;
    color: rebeccapurple;

`

export const ItemSlider = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    width: 100%;


`

export const ItemCard = styled.div`
    background: white;
    color: purple;
    border: 2px solid grey;
    min-height: 5vh;
    width: 240px;
    max-width: 100%;
`;

export const ItemImage = styled.img`
    
    max-width: 240px;
    border-radius: 5px;


    @media (max-width: 800px){
        max-width: 100%;

    }
`;