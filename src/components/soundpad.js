

  const playSound = (key) => {
    const audio = document.getElementById(key)
    audio.currentTime = 0
    audio.play()
  }

  
  function playPiano(val) {
    if (val === 'Q') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Piano_ac%C3%BAstico%2C_acorde_Am.ogg';
        audio.volume = volume;
        audio.id = "Q";
        audio.className = 'clip';
        audio.name = 'ACORDE A';
        setSound(audio.play());
        setDisplay(audio.name);
        setVolume(audio.volume);  
    } else if (val === 'W') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Piano_ac%C3%BAstico%2C_acorde_Bdis.ogg';
        audio.volume = volume;
        audio.id = "W";
        audio.className = 'clip';
        audio.name = 'ACORDE B';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);  
    } else if (val === 'E') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Piano_ac%C3%BAstico%2C_acorde_C.ogg';
        audio.volume = volume;
        audio.id = "E";
        audio.className = 'clip';
        audio.name = 'ACORDE C';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'A') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/2/28/Piano_ac%C3%BAstico%2C_acorde_Dm.ogg';
        audio.volume = volume;
        audio.id = "A";
        audio.className = 'clip'; 
        audio.name = 'ACORDE D';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'S') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Piano_ac%C3%BAstico%2C_acorde_Em.ogg';
        audio.volume = volume;
        audio.id = "S";
        audio.className = 'clip';
        audio.name = 'ACORDE E';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'D') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Piano_ac%C3%BAstico%2C_acorde_F.ogg';
        audio.volume = volume;
        audio.id = "D";
        audio.className = 'clip';
        audio.name = 'ACORDE F';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'Z') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/9/95/Piano_ac%C3%BAstico%2C_acorde_G.ogg';
        audio.volume = volume;
        audio.id = "Z";
        audio.className = 'clip';
        audio.name = 'ACORDE G';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'X') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/4/46/68448_pinkyfinger_Piano_G.ogg';
        audio.volume = volume;
        audio.id = "X";
        audio.className = 'clip'; 
        audio.name = 'PINKYFINGER'; 
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'C') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Media-440Hz.ogg';
        audio.volume = volume;
        audio.id = "C";
        audio.className = 'clip'; 
        audio.name = 'MEDIA-440HZ';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);  
    }
    
  }

  
  function playDrum(val) {
    if (val === 'Q') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/8/85/Blast4.ogg';
        audio.volume = volume;
        audio.id = "Q";
        audio.className = 'clip'; 
        audio.name = 'BLAST 4';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'W') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg';
        audio.volume = volume;
        audio.id = "W";
        audio.className = 'clip';
        audio.name = 'CRASH';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'E') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/8/80/Chasquido.ogg';
        audio.volume = volume;
        audio.id = "E";
        audio.className = 'clip';
        audio.name = 'CHASQUIDO';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'A') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/5/56/Aplausos.ogg';
        audio.volume = volume;
        audio.id = "A";
        audio.className = 'clip';
        audio.name = 'CLAP';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'S') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ride.ogg';
        audio.volume = volume;
        audio.id = "S";
        audio.className = 'clip';
        audio.name = 'RIDE';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'D') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg';
        audio.volume = volume;
        audio.id = "D";
        audio.className = 'clip';
        audio.name = 'TOM AGUDO';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'Z') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Redoblante_de_marcha.ogg';
        audio.volume = volume;
        audio.id = "Z";
        audio.className = 'clip';
        audio.name = 'REDOBLANTE DE MARCHA';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'X') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/The_Persecution_Kick_2.wav';
        audio.volume = volume;
        audio.id = "X";
        audio.className = 'clip';
        audio.name = 'THE PERSECUTION KICK 2';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
    } else if (val === 'C') {
      const audio = new Audio()
        audio.src = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Start.wav';
        audio.volume = volume;
        audio.id = "C";
        audio.className = 'clip';
        audio.name = 'START';
      setSound(audio.play());
      setDisplay(audio.name);
      setVolume(audio.volume);
      
    }
  }
