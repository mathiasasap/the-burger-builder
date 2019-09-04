import React from 'react';

// Assets
import burgerLogo from '../../assets/images/burger-logo.png';

// Styles
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;