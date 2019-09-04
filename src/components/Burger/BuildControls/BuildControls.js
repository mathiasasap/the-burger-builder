import React from 'react';

// Components
import BuildControl from './BuildControl/BuildControl'

// Styles
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>The total price is: ${props.price}</p>

        {controls.map(ctrl => {
            return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                disabled={props.disabledInfo[ctrl.type]}
                add={() => props.addIngredient(ctrl.type)}
                remove={() => props.removeIngredient(ctrl.type)} />
        })}
    </div>
);

export default buildControls;