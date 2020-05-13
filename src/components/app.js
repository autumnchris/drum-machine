import React, { Component } from 'react';
import DrumPad from './drum-pad';
import Display from './display';

const clap = require('../audio/clap.wav');
const hihat = require('../audio/hihat.wav');
const kick = require('../audio/kick.wav');
const openhat = require('../audio/openhat.wav');
const boom = require('../audio/boom.wav');
const ride = require('../audio/ride.wav');
const snare = require('../audio/snare.wav');
const tom = require('../audio/tom.wav');
const tink = require('../audio/tink.wav');

export default class App extends Component {

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
      instructionsPopoverClass: 'hidden'
    };
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      this.playSound(event);
    });

    window.addEventListener('click', (event) => {

      if (event.target.id !== 'instructions-button') {

        if (event.target.id !== 'instructions-popover' && this.state.instructionsPopoverClass === 'visible') {
          this.setState({
            instructionsPopoverClass: 'hidden'
          });
        }
      }
    });
  }

  toggleInstructionsPopover() {

    if (this.state.instructionsPopoverClass === 'hidden') {
      this.setState({
        instructionsPopoverClass: 'visible'
      });
    }
    else {
      this.setState({
        instructionsPopoverClass: 'hidden'
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
      <div className="body">
        <header>
          <div className="instructions-container">
            <button type="button" className="button instructions-button" onClick={() => this.toggleInstructionsPopover()} aria-label="Instructions" title="Instructions" id="instructions-button">
              <span className="fas fa-question-circle"></span>
            </button>
            <div className={`instructions-popover ${this.state.instructionsPopoverClass}`} id="instructions-popover">
              <p>Click the buttons or press their accompanying keys on your keyboard to play their associated drum kit sounds.</p>
            </div>
          </div>
          <h1>Drum Machine</h1>
        </header>
        <main>
          <Display currentAudio={this.state.currentAudio} />
          <div className="drum-pads-container">{this.state.audioData.map((drumPad, index) => <DrumPad key={index} drumPad={drumPad} playSound={this.playSound} />)}</div>
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </div>
    );
  }
}
