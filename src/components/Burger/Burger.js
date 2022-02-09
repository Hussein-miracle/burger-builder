import React from 'react';
import classes from "./Burger.module.scss";

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


export const Burger = ( {ingredients} ) => {
    // const ingredientValue = for(const ing in ingredients){

    // }
    const transformedIngredients = Object.keys(ingredients)
    .map( (transIngKey) => {
        return [...Array(ingredients.transIngKey)].map((_,index) => {
            return <BurgerIngredient key={transIngKey + index} type={transIngKey} />
        })
    });

    return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
    )
}




export default Burger;