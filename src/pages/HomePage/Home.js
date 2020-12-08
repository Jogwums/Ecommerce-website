import React from 'react'
import {InfoSection, StoreFront} from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import Slider from '../../components/index'

const Home = () => {
    return (
        <>
            <StoreFront {...homeObjOne } />


            
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
