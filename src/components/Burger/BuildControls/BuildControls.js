import React from 'react';

import classes from "./BuildControls.module.scss";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:"Salad",type:"salad"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
    {label:"Bacon",type:"bacon"}
];


const BuildControls = ({ingredientAdded ,ingredientRemoved ,disabled,price ,purchaseable,ordered}) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:<strong>${price}</strong>  </p>
            {
                controls.map( (control) => {
                    return <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    type={control.type} 
                    added={ () => ingredientAdded(control.type)} 
                    removed={() => ingredientRemoved(control.type)}
                    disabled={disabled[control.type]}
                    />
                })
            }

            <button className={classes.OrderButton} disabled={!purchaseable}onClick={ordered} >ORDER NOW</button>
        </div>
    )
}


export default  BuildControls;