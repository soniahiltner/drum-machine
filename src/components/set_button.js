import React from "react";
import '../stylesheets/set_button.css';

const SetButton = (props) => {
  return (
    <button 
      className='btn bt-default col setbutton'
      value={props.kit}
      onClick={ () => props.handleClick(props.kit)}>
     {props.children}
    </button>
  )
};
export default SetButton;
