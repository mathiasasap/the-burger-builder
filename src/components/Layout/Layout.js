import React from 'react';

// HOC
import Aux from '../../hoc/Auxilliary';

// Styles
import classes from './Layout.css';

// Components
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => 
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>

export default layout;