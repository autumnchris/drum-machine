import React, { useState, useEffect } from 'react';
import sounds from '../data/sounds';
import InstructionsPopover from './InstructionsPopover';
import Display from './Display';
import DrumPad from './DrumPad';

const App = () => {  
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [currentAudio, setCurrentAudio] = useState('');

  useEffect(() => {
    window.addEventListener('click', event => {

      if (event.target.id !== 'instructions-button' && event.target.id !== 'instructions-popover') {
        setPopoverVisible(false);
      }
    });
  }, []);

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

      if (key === sound.key || event.keyCode === sound.keyCode) {
        document.getElementById(sound.key).currentTime = 0;
        document.getElementById(sound.key).play();
        setCurrentAudio(sound.type);
      }
    });
  }

  return (
    <React.Fragment>
      <header>
        <div className="instructions-container">
          <button type="button" className="button instructions-button" onClick={() => setPopoverVisible(!popoverVisible)} aria-label="Instructions" title="Instructions" id="instructions-button">
            <span className="fas fa-question-circle"></span>
          </button>
          {popoverVisible && <InstructionsPopover />}
        </div>
        <h1>Drum Machine</h1>
      </header>
      <main>
        <Display currentAudio={currentAudio} />
        <div className="drum-pads-container">{sounds.map((drumPad, index) => <DrumPad key={index} drumPad={drumPad} playSound={playSound} />)}</div>
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
