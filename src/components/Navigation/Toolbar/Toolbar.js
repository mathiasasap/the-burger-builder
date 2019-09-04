import React from 'react';

// Styles
import classes from './Toolbar.css';

// Components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationsItems/NavigationsItems';

const toolbar = () => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;