const drumsounds = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Blast4.ogg',
      keytrigger: 'Q',
      id: 'BLAST 4',
      keycode: 81,
      index: 1   
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg',
      keytrigger: 'W',
      id: "CRASH",
      keycode: 87,
      index: 2
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Chasquido.ogg',
      keytrigger: 'E',
      id: 'CHASQUIDO',
      keycode: 69,
      index: 3
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Aplausos.ogg',
      keytrigger: 'A',
      id: 'CLAP',
      keycode: 65,
      index: 4
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ride.ogg',
      keytrigger: 'S',
      id: "RIDE",
      keycode: 83,
      index: 5 
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg',
      keytrigger: 'D',
      id: "TOM AGUDO",
      keycode: 68,
      index: 6
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Redoblante_de_marcha.ogg',
      keytrigger: 'Z',
      id: 'REDOBLANTE DE MARCHA',
      keycode: 90,
      index: 7
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/The_Persecution_Kick_2.wav',
      keytrigger: 'X',
      id: 'THE PERSECUTION KICK 2',
      keycode: 88,
      index: 8
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Start.wav',
      keytrigger: 'C',
      id: 'START',
      keycode: 67,
      index: 9
    }
  ];

  const pianosounds = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Piano_ac%C3%BAstico%2C_acorde_Am.ogg',
      keytrigger: 'Q',
      id: 'ACORDE A',
      keycode: 81,
      index: 1   
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Piano_ac%C3%BAstico%2C_acorde_Bdis.ogg',
      keytrigger: 'W',
      id: 'ACORDE B',
      keycode: 87,
      index: 2
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Piano_ac%C3%BAstico%2C_acorde_C.ogg',
      keytrigger: 'E',
      id: 'ACORDE C',
      keycode: 69,
      index: 3
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Piano_ac%C3%BAstico%2C_acorde_Dm.ogg',
      keytrigger: 'A',
      id: 'ACORDE D',
      keycode: 65,
      index: 4
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Piano_ac%C3%BAstico%2C_acorde_Em.ogg',
      keytrigger: 'S',
      id: 'ACORDE E',
      keycode: 83,
      index: 5 
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Piano_ac%C3%BAstico%2C_acorde_F.ogg',
      keytrigger: 'D',
      id: 'ACORDE F',
      keycode: 68,
      index: 6
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Piano_ac%C3%BAstico%2C_acorde_G.ogg',
      keytrigger: 'Z',
      id: 'ACORDE G',
      keycode: 90,
      index: 7
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/68448_pinkyfinger_Piano_G.ogg',
      keytrigger: 'X',
      id: 'PINKYFINGER',
      keycode: 88,
      index: 8
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Media-440Hz.ogg',
      keytrigger: 'C',
      id: 'MEDIA-440HZ',
      keycode: 67,
      index: 9
    }
  ];

  const groupofsounds = [pianosounds, drumsounds];
  const drum = {
    clips: drumsounds
  }
  const piano = {
    clips: pianosounds
  }
  
  function setpianosounds(groupofsounds) {
    if(groupofsounds[0] === drumsounds) {
      const copy = groupofsounds.slice();
      const newarr =copy.reverse()
      return newarr;
      } else if (groupofsounds[0] === pianosounds) {
        const copy = groupofsounds.slice();
        return copy;
      }
  }
  function setdrumsounds(groupofsounds) {
    if(groupofsounds[0] === pianosounds) {
    const copy = groupofsounds.slice();
    const newarr =copy.reverse()
    return newarr;
    } else if (groupofsounds[0] === drumsounds) {
      const copy = groupofsounds.slice();
      return copy;
    }
  }
console.log(setpianosounds(groupofsounds))

function setpianosounds(groupOfsounds) {
  if(selectedkit === drumsounds) {
    const copy = groupOfsounds.slice();
    const newarr =copy.reverse()
    return newarr;
    } else if (selectedkit === pianosounds) {
      const copy = groupOfsounds.slice();
      return copy;
    }
}
function setdrumsounds(groupOfsounds) {
  if(selectedkit === pianosounds) {
  const copy = groupOfsounds.slice();
  const newarr =copy.reverse()
  return newarr;
  } else if (selectedkit === drumsounds) {
    const copy = groupOfsounds.slice();
    return copy;
  }
}

  
  function changetopianokit(kit) {
    const copy = Object.assign({}, kit);
    const newkit = Object.assign(copy, pianokit);
    return newkit;
  }

  function changetopianokit(kit) {
    const copy = [...kit]
    copy.splice(0, 9, ...pianosounds)
    return copy;
  }
  

  function changetodrumkit(kit) {
    const copy = kit.slice()
    copy.splice(0, 9, ...drumsounds)
    return copy;
  }
  //console.log(changetodrumkit(pianosounds))

  function setpianosounds(sounds) {
    const copy = Object.assign({}, sounds);
    const newsounds = Object.assign(copy, piano);
    return newsounds;
  }
  function setdrumsounds(sounds) {
    const copy = Object.assign({}, sounds);
    const newsounds = Object.assign(copy, drum);
    return newsounds;
  }
  
  const handleSet = React.useCallback((val) => {
    if(val === 'DRUM') {
      setSounds({
        ...sounds,
          clips: drumsounds
      }  
      )
      setKit(sounds.clips)
      
      console.log(sounds)
    } else if(val === 'PIANO') {
      setSounds({
        ...sounds,
          clips: pianosounds
      }  
      )
      setKit(sounds.clips)
    }
  },[drumsounds,pianosounds,sounds]);

  React.useEffect(() => {
    handleSet();
  }, [handleSet])
  
      
     