import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Components
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    Build Controls
                </div>
            </Aux>
        )
    }
}

export default BurguerBuilder;