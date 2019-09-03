import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

class BurguerBuilder extends Component {

    render() {
        return (
            <Aux>
                <div>
                    Burger
                </div>
                <div>
                    Build Controls
                </div>
            </Aux>
        )
    }
}

export default BurguerBuilder;