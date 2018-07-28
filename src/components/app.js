import React, { Component } from 'react';
import ButtonGroup from './button-group';
import Display from './display';

const clap = require('.././audio/clap.wav');
const hihat = require('.././audio/hihat.wav');
const kick = require('.././audio/kick.wav');
const openhat = require('.././audio/openhat.wav');
const boom = require('.././audio/boom.wav');
const ride = require('.././audio/ride.wav');
const snare = require('.././audio/snare.wav');
const tom = require('.././audio/tom.wav');
const tink = require('.././audio/tink.wav');

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
      currentAudio: ''
    };
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      this.playSound(event);
    });
  }

  playSound(event, key) {
    return this.state.audioData.map((sound) => {

      if (key === sound.key || event.keyCode === sound.keyCode) {
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
          <h1>Drum Machine</h1>
        </header>
        <main>
          <ButtonGroup buttons={this.state.audioData} playSound={this.playSound} />
          <Display currentAudio={this.state.currentAudio} />
        </main>
        <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
