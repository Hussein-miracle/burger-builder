import React from "react";
import classes from "./Modal.module.scss";

const Modal = ({children}) => {
    return (
        <div className={classes.Modal}>
            {children}
        </div>
    )
}

export default Modal;