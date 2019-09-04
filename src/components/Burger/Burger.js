import React from 'react';

// Styles
import classes from './Burger.css';

// Components
import BurguerIngredient from './BurguerIngredient/BurgerIngredient';
import BurgerIngredient from './BurguerIngredient/BurgerIngredient';

const Burger = (props) => {

    //Make an array of the keys of ingredients
    let transformedIngredients = Object.keys(props.ingredients)
        // For each key in the ingredients we create an array that has x 
        // elements being x the value of the igKey
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />
            })
        // In order to only have one array of items
        }).reduce((arr, el) => { 
            return arr.concat(el);
        }, []); 

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurguerIngredient type='bread-top' />
            {transformedIngredients}
            <BurguerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;
