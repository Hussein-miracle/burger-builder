import React from 'react'
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="burger logo"/>
        </div>
    )
}

export default Logo;