import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxilliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from "./SideDrawer.module.scss";


const SideDrawer = ({closed , open}) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(open){
        attachedClasses = [classes.SideDrawer,classes.Open];
        
    }
    return (
        <Aux>
            <Backdrop show={open} clicked={closed}/>
            <div className={attachedClasses.join(" ")}>
                
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
        
    )
}

export default SideDrawer;