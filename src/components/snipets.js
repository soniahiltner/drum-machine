const Keyboard = ({ play, pianosounds }) => {
    return pianosounds.map((sound) => <Drumpad play={play} sound={sound} /> )
  }

  
  const play = (keyTrigger) => {
    const audio = document.getElementById(keyTrigger)
    audio.currentTime = 0;
    audio.play()
  }

  <Keyboard play={play} sound={sound}/>

  const Drumpad = ({ play, sound: { url, keyTrigger, keycode} }) => {
    const handlekeypress = React.useCallback((event) => {
      if(event.keyCode === keycode) {
        play(keyTrigger)
      }
    }, [keycode,play, keyTrigger])
  
  
    React.useEffect(() => {
    
      window.addEventListener('keyPress', handlekeypress);
      return () => {
        window.removeEventListener('keyPress', handlekeypress);
      }  
    }, []);
  
    return (
      <button className='drum-pad' onClick={() => play(keyTrigger)}>
        <audio src={url} id={keyTrigger} keycode={keycode}/>
        {keyTrigger}
      </button>
    )
  
  }

  const handlekeypress = (event) => {
    if(event.keyCode === keycode) {
      play(key)
    }
  };

  React.useEffect(() => {
    window.addEventListener('keyPress', handlekeypress);
    return () => {
      window.removeEventListener('keyPress', handlekeypress);
    }  
  }, []);
  const groupOfSounds = {
    drumkit: drumsounds,
    pianokit: pianosounds
  };
 
  const nameOfSounds = {
    drumkit: 'DRUM',
    pianokit: 'PIANO'
  };

  const playSound = (val) => {
    return new Promise(function(resolve) {
      const audio = document.getElementById(val);
      audio.addEventListener('ended', resolve);
      audio.currentTime = 0
      audio.play(val);
      console.log('error');
      
    });
  } 
  
  <div className='row row-pad'>
  {sounds.map((sound) =>
<Drumpad key={sound.index} play={setPlay} sound={sound} />)} 
  </div>
   