import { useState } from 'react'
import './App.css'
import Display from './components/Display/Display';
import Drumpad from './components/Drumpad/Drumpad';
import Volume from './components/Volume/Volume';
import Power from './components/Power/Power';
import { FaVolumeUp } from "react-icons/fa";

function App() {
 
   const drumsounds = [
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/8/85/Blast4.ogg",
       keytrigger: "Q",
       id: "BLAST 4",
       keycode: 81,
       index: 1,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg",
       keytrigger: "W",
       id: "CRASH",
       keycode: 87,
       index: 2,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Chasquido.ogg",
       keytrigger: "E",
       id: "CHASQUIDO",
       keycode: 69,
       index: 3,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Aplausos.ogg",
       keytrigger: "A",
       id: "CLAP",
       keycode: 65,
       index: 4,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ride.ogg",
       keytrigger: "S",
       id: "RIDE",
       keycode: 83,
       index: 5,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg",
       keytrigger: "D",
       id: "TOM AGUDO",
       keycode: 68,
       index: 6,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Redoblante_de_marcha.ogg",
       keytrigger: "Z",
       id: "REDOBLANTE DE MARCHA",
       keycode: 90,
       index: 7,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/The_Persecution_Kick_2.wav",
       keytrigger: "X",
       id: "THE PERSECUTION KICK 2",
       keycode: 88,
       index: 8,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Start.wav",
       keytrigger: "C",
       id: "START",
       keycode: 67,
       index: 9,
     },
   ];

   const pianosounds = [
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Piano_ac%C3%BAstico%2C_acorde_Am.ogg",
       keytrigger: "Q",
       id: "ACORDE A",
       keycode: 81,
       index: 1,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Piano_ac%C3%BAstico%2C_acorde_Bdis.ogg",
       keytrigger: "W",
       id: "ACORDE B",
       keycode: 87,
       index: 2,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Piano_ac%C3%BAstico%2C_acorde_C.ogg",
       keytrigger: "E",
       id: "ACORDE C",
       keycode: 69,
       index: 3,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Piano_ac%C3%BAstico%2C_acorde_Dm.ogg",
       keytrigger: "A",
       id: "ACORDE D",
       keycode: 65,
       index: 4,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Piano_ac%C3%BAstico%2C_acorde_Em.ogg",
       keytrigger: "S",
       id: "ACORDE E",
       keycode: 83,
       index: 5,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Piano_ac%C3%BAstico%2C_acorde_F.ogg",
       keytrigger: "D",
       id: "ACORDE F",
       keycode: 68,
       index: 6,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Piano_ac%C3%BAstico%2C_acorde_G.ogg",
       keytrigger: "Z",
       id: "ACORDE G",
       keycode: 90,
       index: 7,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/4/46/68448_pinkyfinger_Piano_G.ogg",
       keytrigger: "X",
       id: "PINKYFINGER",
       keycode: 88,
       index: 8,
     },
     {
       src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Media-440Hz.ogg",
       keytrigger: "C",
       id: "MEDIA-440HZ",
       keycode: 67,
       index: 9,
     },
   ];

   const placeholder = "Please, turn on the machine";
   const placeholder1 = "Now, select a kit and play";
   const [display, setDisplay] = useState(placeholder);
   const [power, setPower] = useState(false);
   const [volume, setVolume] = useState(0.5);
   const [drumshown, setDrumshown] = useState(true);
   const [pianoshown, setPianoshown] = useState(false);

   const handleSet = () => {
     setDrumshown((current) => !current);
     setPianoshown((current) => !current);
   };

   const playSound = (val) => {
     return new Promise(function () {
       const audio = document.getElementById(val);
       audio.currentTime = 0;
       audio.play(val);
     });
   };

   function handlePower() {
     if (power === false) {
       setDisplay(placeholder1);
       setPower(!power);
     } else if (power) {
       setDisplay(placeholder);
       setPower(!power);
     }
   }

   function setPlay(val1, val2) {
     playSound(val1);
     setDisplay(val2);
   }

   const volumeSlider = (event) => {
     setVolume(event.target.value);
   };

   const setkeyvolume = (val) => {
     const audios = val.map((sound) =>
       document.getElementById(sound.keytrigger)
     );
     audios.forEach((audio) => {
       if (audio) {
         audio.volume = volume;
       }
     });
   };

   return (
     <div id="drum-machine" className="wrapper container-fluid">
       {setkeyvolume(drumsounds)}
       {setkeyvolume(pianosounds)}
       <div
         className="container drum-machine"
         style={
           pianoshown
             ? { backgroundColor: "rgb(0, 43, 43)" }
             : { backgroundColor: "rgb(182, 43, 43)" }
         }
       >
         <div className="row header">
           <div className="col header_buttons">
             <Power value={power} handleToggle={handlePower} />
           </div>
           <div className="col header_buttons">
             <FaVolumeUp className="icon" />
             <Volume volumeval={volume} handleVolume={volumeSlider} />
           </div>
         </div>
         <div>
           {drumshown && (
             <div className="soundsname">
               <h1>DRUM SOUNDS</h1>
             </div>
           )}
           <div className="row-pad">
             {drumshown &&
               drumsounds.map((sound) => (
                 <Drumpad key={sound.index} play={setPlay} sound={sound} />
               ))}
           </div>
           {pianoshown && (
             <div className="soundsname pianoname">
               <h1>PIANO SOUNDS</h1>
             </div>
           )}
           <div className="row-pad">
             {pianoshown &&
               pianosounds.map((sound) => (
                 <Drumpad key={sound.index} play={setPlay} sound={sound} />
               ))}
           </div>
           <button className="sounds_button" onClick={handleSet}>
             Sounds kits
           </button>
         </div>
         <div className="row screen">
           <Display value={display} />
         </div>
       </div>
     </div>
   );
}

export default App
