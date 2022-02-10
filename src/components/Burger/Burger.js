import React from 'react';
import classes from "./Burger.module.scss";

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


export const Burger = ( {ingredients} ) => {
    let transformedIngredients = Object.keys(ingredients).map( (transIngKey) => {
        return [...Array(ingredients[transIngKey])].map((_,index) => {
            return <BurgerIngredient key={transIngKey + index} type={transIngKey} />
        })
    })
    // .reduce((arr,el) => {
    //     return arr.concat(el)
    // },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    // console.log(transformedIngredients);

    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
            {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
    )
}




export default Burger;