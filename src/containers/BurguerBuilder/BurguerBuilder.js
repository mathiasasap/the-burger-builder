import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Components
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// Context
import IngredientsContext from '../../context/ingredients-context';

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        },
        addIngredient: this.addIngredientHandler,
        removeIngredient: this.removeIngredientHandler,
    }

    addIngredientHandler = (ingredient) => {
        const updatetedIngredients = {...this.state.ingredients};

        const oldValue = updatetedIngredients[ingredient];
        const newValue = oldValue + 1;
        updatetedIngredients[ingredient] = newValue;
        // Update the state
        this.setState({ingredients: updatetedIngredients});
    }
    
    removeIngredientHandler = (ingredient) => {
        const updatetedIngredients = {...this.state.ingredients};

        const oldValue = updatetedIngredients[ingredient];
        if(oldValue > 0) {
            const newValue = oldValue - 1;
            updatetedIngredients[ingredient] = newValue;
            // Update the state
            this.setState({ingredients: updatetedIngredients});
        }
    }

    render() {
        return (
            <Aux>
                <IngredientsContext.Provider
                    value={{
                        ingredients: this.state.ingredients,
                        addIngredient: this.state.addIngredient,
                        removeIngredient: this.state.removeIngredient,
                    }}>

                    <Burger />
                    
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler} />

                </IngredientsContext.Provider>
            </Aux>
        )
    }
}

export default BurguerBuilder;