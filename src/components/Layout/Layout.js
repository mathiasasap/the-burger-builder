import React, { Component } from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Styles
import classes from './Layout.css';

// Components
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component { 

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        
    }

    render() {
        return <Aux>
            <Toolbar />
            <SideDrawer show={this.state.showSideDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    }
}

export default Layout;