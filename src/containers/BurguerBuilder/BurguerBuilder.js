import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Components
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 1,
    bacon: 2,
    cheese: 1.5,
    meat: 3.5,
}

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        },
        price: 6,
    }

    addIngredientHandler = (ingredient) => {
        // Update ingredients
        const updatedIngredients = {...this.state.ingredients};
        const oldValue = updatedIngredients[ingredient];
        const newValue = oldValue + 1;
        updatedIngredients[ingredient] = newValue;
        // Update price
        const oldPrice = this.state.price;
        const updatedPrice = oldPrice + INGREDIENTS_PRICES[ingredient];
        // Update the state
        this.setState({ingredients: updatedIngredients, price: updatedPrice});
    }
    
    removeIngredientHandler = (ingredient) => {
        const updatedIngredients = {...this.state.ingredients};

        const oldValue = updatedIngredients[ingredient];
        if(oldValue > 0) {
            // Update ingredients
            const newValue = oldValue - 1;
            updatedIngredients[ingredient] = newValue;
            // Update price
            const oldPrice = this.state.price;
            const updatedPrice = oldPrice - INGREDIENTS_PRICES[ingredient];
            // Update the state
            this.setState({ingredients: updatedIngredients, price: updatedPrice});
        }
    }

    render() {

        // disabledInfo will have boolean values for each ingredient in order to allow 
        // to remove that ingredient or not
        const disabledInfo = {
            ...this.state.ingredients,
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                
                <BuildControls
                    price={this.state.price}
                    disabledInfo={disabledInfo}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} />
            </Aux>
        )
    }
}

export default BurguerBuilder;