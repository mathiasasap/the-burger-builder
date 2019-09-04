import React from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Styles
import classes from './Layout.css';

// Components
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => 
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

export default layout;