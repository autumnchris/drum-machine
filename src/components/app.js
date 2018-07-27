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
          sound: clap
        },
        {
          type: 'hihat',
          key: 'W',
          sound: hihat
        },
        {
          type: 'kick',
          key: 'E',
          sound: kick
        },
        {
          type: 'openhat',
          key: 'A',
          sound: openhat
        },
        {
          type: 'boom',
          key: 'S',
          sound: boom
        },
        {
          type: 'ride',
          key: 'D',
          sound: ride
        },
        {
          type: 'snare',
          key: 'Z',
          sound: snare
        },
        {
          type: 'tom',
          key: 'X',
          sound: tom
        },
        {
          type: 'tink',
          key: 'C',
          sound: tink
        }
      ],
      currentAudio: ''
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(event, key) {

    switch (key || event.keyCode) {
      case 'Q':
      case 81:
          document.getElementById('Q').play();
          this.setState({
            currentAudio: 'clap'
          });
          break;
        case 'W':
        case 87:
          document.getElementById('W').play();
          this.setState({
            currentAudio: 'hihat'
          });
          break;
        case 'E':
        case 69:
          document.getElementById('E').play();
          this.setState({
            currentAudio: 'kick'
          });
          break;
        case 'A':
        case 65:
          document.getElementById('A').play();
          this.setState({
            currentAudio: 'openhat'
          });
          break;
        case 'S':
        case 83:
          document.getElementById('S').play();
          this.setState({
            currentAudio: 'boom'
          });
          break;
        case 'D':
        case 68:
          document.getElementById('D').play();
          this.setState({
            currentAudio: 'ride'
          });
          break;
        case 'Z':
        case 90:
          document.getElementById('Z').play();
          this.setState({
            currentAudio: 'snare'
          });
          break;
        case 'X':
        case 88:
          document.getElementById('X').play();
          this.setState({
            currentAudio: 'tom'
          });
          break;
        case 'C':
        case 67:
          document.getElementById('C').play();
          this.setState({
            currentAudio: 'tink'
          });
    }
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
