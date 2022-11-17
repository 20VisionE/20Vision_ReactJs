import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text}) => {
    const CreateEvent=()=>{
        console.log("This is itest");
    }
  return (
    <button onClick={CreateEvent} style={{backgroundColor:color}} className='btn'>{text}
    
    </button>
  )
}

Button.defaultProps={
    color:'steelblue'
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
}
export default Button
