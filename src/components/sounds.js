const sound1 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Blast4.ogg',
    key: 'Q',
    id: 'BLAST 4',
    keycode: 1    
});
const sound1name = 'BLAST 4';

const sound2 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg',
    key: 'W',
    id: "CRASH",
    keycode: 2
});
const sound2name = 'CRASH';

const sound3 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Hi-Hat_Abierto.ogg',
    key: 'E',
    id: "HI-HAT ABIERTO",
    keycode: 3
});
const sound3name = 'ACORDE C';

const sound4 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Hi-Hat_Cerrado.ogg',
    key: 'A',
    id: "HI-HAT CERRADO",
    keycode: 4
});
const sound4name = 'ACORDE D';

const sound5 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ride.ogg',
    key: 'S',
    id: "RIDE",
    keycode: 5
});
const sound5name = 'ACORDE E';

const sound6 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg',
    key: 'D',
    id: "TOM AGUDO",
    keycode: 6
  });  
const sound6name = 'ACORDE F';

const sound7 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Tom_Grave.ogg',
    key: 'Z',
    id: "TOM GRAVE",
    keycode: 7
});
const sound7name = 'ACORDE G';

const sound8 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/68448_pinkyfinger_Piano_G.ogg',
    key: 'X',
    id: "PINKYFINGER",
    keycode: 8
  });
const sound8name = 'PINKYFINGER';

const sound9 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Media-440Hz.ogg',
    key: 'C',
    id: "MEDIA-440HZ",
    keycode: 9
  });
const sound9name = 'MEDIA-440HZ';

const sound10 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Blast4.ogg',
    key: 'Q',
    id: "BLAS",
    keycode:     
  });
  const sound10name = 'BLAST 4';

const sound11 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg',
    
    id: "W",
    keycode: 
  });
const sound11name = 'CRASH';

const sound12 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Hi-Hat_Abierto.ogg',
    
     id: "E",
     keycode: 
});
const sound12name = 'OPEN HIT-HAT';

const sound13 = new Howl({
    src: 
    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Hi-Hat_Cerrado.ogg',
    
    id: "A",
    keycode: 
});
const sound13name = 'CLOSED HIT-HAT';

const sound14 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ride.ogg',
    
    id: "S",
    keycode: 
});
const sound14name = 'RIDE';

const sound15 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg',
    
    id: "D",
    keycode: 
});
const sound15name = 'TOM AGUDO';

const sound16 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Tom_Grave.ogg',
    
    id: "Z",
    keycode: 
});
const sound16name = 'TOM GRAVE';  

const sound17 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/The_Persecution_Kick_2.wav',
    
    id: "X",
    keycode: 
});
const sound17name = 'THE PERSECUTION KICK 2';

const sound18 = new Howl({
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Start.wav',
    
    id: "C",
    keycode: 
});
const sound18name = 'START';

function playPiano(val, sound) {
  if (val === 'Q') {
    sound = sound1;
    setDisplay(sound1name);
    setSound(sound.play())
  } else if (val === 'W') {
    sound = sound2;
    setDisplay(sound2name);
    setSound(sound.play());
  } else if (val === 'E') {
    sound = sound3;
    setDisplay(sound3name);
    setSound(sound.play());
  } else if (val === 'A') {
    sound = sound4;
    setDisplay(sound4name);
    setSound(sound.play());
  } else if (val === 'S') {
    sound = sound5;
    setDisplay(sound5name);
    setSound(sound.play());
  } else if (val === 'D') {
    sound = sound6;
    setDisplay(sound6name);
    setSound(sound.play());
  } else if (val === 'Z') {
    sound = sound7;
    setDisplay(sound7name);
    setSound(sound.play());
  } else if (val === 'X') {
    sound = sound8;
    setDisplay(sound8name);
    setSound(sound.play());
  } else if (val === 'C') {
    sound = sound9;
    setDisplay(sound9name);
    setSound(sound.play());
}
setVolume(sound.volume({volume}));
}

function playDrum(val, sound) {
  if (val === 'Q') {
    sound = sound10;
    setDisplay(sound10name);
    setSound(sound.play())
  } else if (val === 'W') {
    sound = sound11;
    setDisplay(sound11name);
    setSound(sound.play());
  } else if (val === 'E') {
    sound = sound12;
    setDisplay(sound12name);
    setSound(sound.play());
  } else if (val === 'A') {
    sound = sound13;
    setDisplay(sound13name);
    setSound(sound.play());
  } else if (val === 'S') {
    sound = sound14;
    setDisplay(sound14name);
    setSound(sound.play());
  } else if (val === 'D') {
    sound = sound15;
    setDisplay(sound15name);
    setSound(sound.play());
  } else if (val === 'Z') {
    sound = sound16;
    setDisplay(sound16name);
    setSound(sound.play());
  } else if (val === 'X') {
    sound = sound17;
    setDisplay(sound17name);
    setSound(sound8.play());
  } else if (val === 'C') {
    sound = sound18;
    setDisplay(sound18name);
    setSound(sound9.play());
}
setVolume(sound.volume({volume}));
}





