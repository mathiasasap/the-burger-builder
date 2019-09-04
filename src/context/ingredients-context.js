import React from 'react';

// A context is a value that can be acceeded without getting it from props
const ingredientsContext = React.createContext({
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    addIngredient: () => {},
    removeIngredient: () => {},
});

export default ingredientsContext;