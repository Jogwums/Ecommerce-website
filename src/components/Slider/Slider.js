import React, {useState} from 'react';
import Carousel from 'styled-components-carousel';
import { DIV } from'./Slider.elements';

import {Slides} from '../index'


const Slider = () => (
    <Carousel
        slidesToShow={3}
        center
        centerPadding={30}
        infinite
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
                    slidesToShow: 2,
                    showArrows: false,
                    showIndicator: true,
                    swipeable: true,
                    infinite: true,
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
                    infinite: true,
                },
            },
        ]}
    >
        <DIV>
            <Slides />
        </DIV>
        
        
    </Carousel>
);

export default Slider;