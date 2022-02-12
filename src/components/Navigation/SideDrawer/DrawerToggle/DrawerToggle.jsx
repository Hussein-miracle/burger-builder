import React from 'react'
import classBank from "./DrawerToggle.module.scss";
const DrawerToggle = ({clicked}) => {
  return (
    <div className={classBank.DrawerToggle} onClick={clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default DrawerToggle;