import React from "react";
import classes from "./Modal.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilliary";
const Modal = ({children , show ,modalClosed}) => {
    return (
        <Aux>
            <Backdrop show={show} clicked={modalClosed}/>
                <div className={classes.Modal}
            style={{
                transform: show ? "translateY(0)" : "translateY(-100vh)",
                opacity:show ? "1" : "0"
            }}
            >
                {children}
            </div>
        </Aux>
    )
}

export default Modal;