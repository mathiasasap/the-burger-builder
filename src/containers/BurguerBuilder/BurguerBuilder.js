import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Components
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component {

    render() {
        return (
            <Aux>
                <Burger />
                <div>
                    Build Controls
                </div>
            </Aux>
        )
    }
}

export default BurguerBuilder;