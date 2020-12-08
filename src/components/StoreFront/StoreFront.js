import React from 'react'
import { StoreFrontContainer,ItemHeader, ItemSlider, ItemCard, ItemImage } from './StoreFront.elements';
import Slider from '../Slider/Slider';


const StoreFront = ({ img, alt }) => {
    return (
        <>
           <StoreFrontContainer>
                <ItemHeader>
                    <h1>Hello from Store project</h1>
                    <p>Holiday season is here!</p>
                </ItemHeader>
                <ItemSlider>
                    <Slider />
                </ItemSlider>
        </StoreFrontContainer> 
        </>
    )
}

export default StoreFront
