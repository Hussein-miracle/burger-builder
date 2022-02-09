import React from "react";

import classes from  "./Layout.module.scss";


import Aux from "../../hoc/Auxilliary";


const Layout = ({children}) => (
    <Aux>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={classes.content}>
            {children}
        </main>
    </Aux>
)


export default Layout;