import React from 'react';

// Styles
import classes from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div 
        className={classes.Backdrop}
        onClick={props.modalClosed}></div> 
    : null
);

export default backdrop;