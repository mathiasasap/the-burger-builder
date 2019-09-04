import React from 'react';

const backdrop = (props) => {
    <div className={classes.Modal}>
        {props.children}
    </div>
};

export default backdrop;