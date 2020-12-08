import React from 'react'
import {InfoSection, StoreFront} from '../../components'
import { homeObjTwo  } from './Data'

const Products = () => {
    return (
        <>
            <StoreFront {...homeObjTwo}  />
            <InfoSection {...homeObjTwo} />
            
        </>
    )
}

export default Products
