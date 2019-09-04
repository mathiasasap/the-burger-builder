import React from 'react';

// Styles
import classes from './Burger.css';

// Components
import BurguerIngredient from './BurguerIngredient/BurgerIngredient';
import BurgerIngredient from './BurguerIngredient/BurgerIngredient';

const burguer = (props) => {

    //Make an array of the keys of ingredients
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />
            })
        }); 

    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurguerIngredient type='bread-top' />
            {transformedIngredients}
            <BurguerIngredient type='bread-bottom' />
        </div>
    );
}

export default burguer;
