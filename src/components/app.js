import React from 'react';
import clap from '../audio/clap.wav';
import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import openhat from '../audio/openhat.wav';
import boom from '../audio/boom.wav';
import ride from '../audio/ride.wav';
import snare from '../audio/snare.wav';
import tom from '../audio/tom.wav';
import tink from '../audio/tink.wav';
import InstructionsPopover from './instructions-popover';
import Display from './display';
import DrumPad from './drum-pad';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      audioData: [
        {
          type: 'clap',
          key: 'Q',
          keyCode: 81,
          sound: clap
        },
        {
          type: 'hihat',
          key: 'W',
          keyCode: 87,
          sound: hihat
        },
        {
          type: 'kick',
          key: 'E',
          keyCode: 69,
          sound: kick
        },
        {
          type: 'openhat',
          key: 'A',
          keyCode: 65,
          sound: openhat
        },
        {
          type: 'boom',
          key: 'S',
          keyCode: 83,
          sound: boom
        },
        {
          type: 'ride',
          key: 'D',
          keyCode: 68,
          sound: ride
        },
        {
          type: 'snare',
          key: 'Z',
          keyCode: 90,
          sound: snare
        },
        {
          type: 'tom',
          key: 'X',
          keyCode: 88,
          sound: tom
        },
        {
          type: 'tink',
          key: 'C',
          keyCode: 67,
          sound: tink
        }
      ],
      currentAudio: '',
      isPopoverVisible: false
    };
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      this.playSound(event);
    });

    window.addEventListener('click', (event) => {

      if (event.target.id !== 'instructions-button' && event.target.id !== 'instructions-popover') {
        this.setState({
          isPopoverVisible: false
        });
      }
    });
  }

  toggleInstructionsPopover() {

    if (!this.state.isPopoverVisible) {
      this.setState({
        isPopoverVisible: true
      });
    }
    else {
      this.setState({
        isPopoverVisible: false
      });
    }
  }

  playSound(event, key) {
    return this.state.audioData.map((sound) => {

      if (key === sound.key || event.keyCode === sound.keyCode) {
        document.getElementById(sound.key).currentTime = 0;
        document.getElementById(sound.key).play();
        this.setState({
          currentAudio: sound.type
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="instructions-container">
            <button type="button" className="button instructions-button" onClick={() => this.toggleInstructionsPopover()} aria-label="Instructions" title="Instructions" id="instructions-button">
              <span className="fas fa-question-circle"></span>
            </button>
            {this.state.isPopoverVisible ? <InstructionsPopover /> : null}
          </div>
          <h1>Drum Machine</h1>
        </header>
        <main>
          <Display currentAudio={this.state.currentAudio} />
          <div className="drum-pads-container">{this.state.audioData.map((drumPad, index) => <DrumPad key={index} drumPad={drumPad} playSound={this.playSound} />)}</div>
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </React.Fragment>
    );
  }
}

export default App;
