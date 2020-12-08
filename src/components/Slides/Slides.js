import React, {useEffect } from 'react';
import { ImgWrapper, Img, SlideCard, SlideText } from './Slides.elements';
import {Container, Button} from '../../globalStyles';

import {composeWithDevTools} from 'redux-devtools-extension'
import {connect} from 'react-redux'
import { fetchRecipes } from '../../store/shop/shopActions'

// import { connect } from 'react-redux'
// import {fetchRecipeRequest, fetchRecipeSuccess, fetchRecipeError} from './shop/shopActions'


const Slides = ({recipes, fetchRecipes}) => {
    useEffect(() => {
        fetchRecipes()
    }, [fetchRecipes])

    return (<>
        {recipes.map(recipe => (
            recipes.loading ? (
                <h2>Loading</h2>
                ) : recipes.error ? (
                    <h2>Error: {recipes.error}</h2>
                ) : ( <Container> 
                    <ImgWrapper>
                        <Img src={recipe.images} alt="slide image"/>
                    </ImgWrapper>
                    <SlideCard>
                        <SlideText>{recipe.name}</SlideText>
                        <SlideText>{recipe.description}</SlideText>
                        <SlideText>{recipe.price}</SlideText>
                        <Button>Buy Now</Button>
                    </SlideCard>
            </Container>)
        ))}
        
       </> )
}

const mapStateToProps = (state) => {
    return{
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slides);

/* 
    recipes.loading ? (
            <h2>Loading</h2>
            ) : recipes.error ? (
                <h2>Error: {recipes.error}</h2>
            ) : ( <Container>
            
                {recipes.map((recipe) => (
            <>
                <ImgWrapper>
                    <Img src={recipe.images} alt="slide image"/>
                </ImgWrapper>
            <div>
                <h1>{recipe.name}</h1>
                <h3>{recipe.description}</h3>
                <h3>{recipe.price}</h3>
            </div>
            <div>
                <Button>Buy Now</Button>
            </div>
            </>
           ))}
        </Container>)
    
*/