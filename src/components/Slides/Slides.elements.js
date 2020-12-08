import styled from 'styled-components'

export const ImgWrapper = styled.div`
max-width: 405px;

`;

export const Img = styled.img`
border: 0;
padding-right: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
 
`;

export const SlideCard = styled.div`
    color: purple;
    height: 300px;
    width: 240px;
    max-width: 100%;
`;

export const SlideText = styled.h3`
    text-align: center;
    font-size: normal;
    font-family: monospace;

`; 
export const ItemImage = styled.img`
    
    max-width: 240px;
    border-radius: 5px;


    @media (max-width: 800px){
        max-width: 100%;

    }
`;