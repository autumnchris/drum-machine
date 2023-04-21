import React, { useEffect } from 'react';
import DrumPad from './DrumPad';
import sounds from '../data/sounds';

const DrumPads = ({ setCurrentAudio }) => {

  useEffect(() => {
    window.addEventListener('keydown', event => {
      playSound(event);
    });

    return () => {
      window.removeEventListener('keydown', event => {
        playSound(event);
      });
    };
  }, [playSound]);

  function playSound(event, key) {
    return sounds.map(sound => {

      if (key === sound.key || event.key === sound.key.toLowerCase()) {
        document.getElementById(sound.key).currentTime = 0;
        document.getElementById(sound.key).play();
        setCurrentAudio(sound.type);
      }
    });
  }
  
  return <div className="drum-pads-container">{sounds.map((drumPad, index) => <DrumPad key={index} drumPad={drumPad} playSound={playSound} />)}</div>;
}

export default DrumPads;