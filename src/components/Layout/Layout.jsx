import React,{Component} from "react";

import classes from  "./Layout.module.scss";


import Aux from "../../hoc/Auxilliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
    state = {showSideDrawer:false}

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState,props) => {
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render(){
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <div>Backdrop</div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
    </Aux>
        )
    }
}


export default Layout;