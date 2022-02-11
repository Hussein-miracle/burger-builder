import React from "react";

import classes from  "./Layout.module.scss";


import Aux from "../../hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({children}) => (
    <Aux>
        <Toolbar/>
        <div>SideDrawer,Backdrop</div>
        <main className={classes.content}>
            {children}
        </main>
    </Aux>
)


export default Layout;