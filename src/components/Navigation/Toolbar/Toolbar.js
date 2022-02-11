import React from 'react';

import classes from "./Toolbar.module.scss";
import Logo from '../../Logo/Logo';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
        <div>MENU</div>

        <Logo/>
        <nav>    
.....
        </nav>
    </header>
  )
}

export default Toolbar;