import React from "react";
import '../stylesheets/power.css';

function Power({value, handleToggle}) {
  return (
    <div>
      <button id='power' className='pad' checked={value} onClick={handleToggle} style={{ backgroundColor: value && '#8e7758'}}>POWER</button>
    </div>
  )
};
export default Power;