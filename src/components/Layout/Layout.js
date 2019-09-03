import React from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Styles
import classes from './Layout.css';

const layout = (props) => 
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

export default layout;