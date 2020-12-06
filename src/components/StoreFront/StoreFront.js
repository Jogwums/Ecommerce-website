import React from 'react'
import { StoreFrontContainer,ItemHeader, ItemSlider, ItemCard, ItemImage } from './StoreFront.elements'

const StoreFront = ({ img, alt }) => {
    return (
        <>
           <StoreFrontContainer>
                <ItemHeader>
                    <h1>Hello from Store project</h1>
                    <p>Holiday season is here!</p>
                </ItemHeader>
                <ItemSlider>
                    <ItemCard>
                        <ItemImage src={img} alt={alt} />
                        
                    </ItemCard>
                    <ItemCard>
                        <ItemImage src={img} alt={alt} />
                        
                    </ItemCard>
                    <ItemCard>
                        <ItemImage src={img} alt={alt} />
                        
                    </ItemCard>
                </ItemSlider>
                
        </StoreFrontContainer> 
        </>
    )
}

export default StoreFront
