import React from 'react';

// Styles
import classes from './Modal.css';

// HOC
import Aux from '../../../hoc/Auxilliary';

// Components
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => 
    <Aux>
        <Backdrop show={props.show} modalClosed={props.closeModal} />
        <div className={classes.Modal}
            style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </Aux>

export default modal;