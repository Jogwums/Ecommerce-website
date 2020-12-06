import React from 'react'
import {InfoSection, StoreFront} from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'

const Items = () => {
    return (
        <>
            <StoreFront  />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            
        </>
    )
}

export default Items
