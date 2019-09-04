import React from 'react';

// Styles
import classes from './Toolbar.css';

// Components
import Logo from '../../Logo/Logo';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
)

export default toolbar;