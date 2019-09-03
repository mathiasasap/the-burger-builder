import React from 'react';

// Styles
import classes from './Burger.css';

// Components
import BurguerIngredient from './BurguerIngredient/BurgerIngredient';

const burguer = (props) => {
    return (
        <div className={classes.Burger}>
            <BurguerIngredient type='bread-top' />
            <BurguerIngredient type='cheese' />
            <BurguerIngredient type='meat' />
            <BurguerIngredient type='bread-bottom' />
        </div>
    );
}

export default burguer;
