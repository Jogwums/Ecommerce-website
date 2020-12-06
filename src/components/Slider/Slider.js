import React, {useState} from 'react'
import styled from 'styled-components'
import Carousel from 'styled-components-carousel';


export const Example = () => (
    <Carousel
        slidesToShow={3}
        center
        centerPadding={30}
        breakpoints={[
            {
                size: 200,
                settings: {
                    slidesToShow: 1,
                    showArrows: false,
                    showIndicator: false,
                    swipeable: true,
                },
            },
            {
                size: 600,
                settings: {
                    slidesToShow: 3,
                    showArrows: false,
                    showIndicator: true,
                    swipeable: true,
                },
            },
            {
                size: 1000,
                settings: {
                    slidesToShow: 4,
                    showArrows: true,
                    showIndicator: true,
                    center: true,
                    swipeable: true,
                },
            },
        ]}
    >
        <DIV>
            <span>1</span>
        </DIV>
        <DIV>
            <span>2</span>
        </DIV>
        <DIV>
            <span>3</span>
        </DIV>
    </Carousel>
);

const DIV = styled.div`
    display: flex; flex-direction: column; background: lightblue; padding: 2rem;
    height: 200px;
`;

