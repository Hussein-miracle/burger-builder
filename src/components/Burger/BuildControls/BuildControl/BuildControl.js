import React from 'react'
// import PropTypes from 'prop-types'
import classes from "./BuildControl.module.scss";


const BuildControl =( {label,added,removed,disabled} ) => {
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button 
        className={classes.Less} 
        disabled={disabled}
        onClick={removed} 
        >Less</button>
        <button className={classes.More} onClick={added}>More</button>
    </div>
  )
}

// BuildControl.propTypes = {}

export default BuildControl;