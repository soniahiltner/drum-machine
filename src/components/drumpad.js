import React from "react";
import '../stylesheets/drumpad.css';


const Drumpad = ({ play, sound: { src, keytrigger, id} }) => {

  React.useEffect(() => {

    function onKeyDown(event) {
    if(event.key.toUpperCase() === keytrigger) {
      play(keytrigger, id); 
    }
      console.log(event)
    }
  
    document.addEventListener('keyup', onKeyDown);
    return () => {
      document.removeEventListener('keyup', onKeyDown);
    }
  }, [keytrigger, play, id]);

  

  return (
    <div className='drum-pad col-3'  id={id} onClick={() => play(keytrigger, id)}>
      <audio  className='clip' id={keytrigger} >
        <source src={src}></source>
      </audio>
      {keytrigger}
    </div>
    )
  };


export default Drumpad;