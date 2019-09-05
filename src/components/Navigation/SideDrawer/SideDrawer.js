import React from 'react';

// Styles
import classes from './SideDrawer.css'; 

// UI
import Backdrop from '../../UI/Backdrop/Backdrop';

// HOC
import Aux from '../../../hoc/Auxilliary';

// Components
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationsItems/NavigationsItems';

const sideDrawer = (props) => {


    return (
        <Aux>
            <Backdrop show={props.showSideDrawer} />
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />   
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;