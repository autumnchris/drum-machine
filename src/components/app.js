import React, { Component } from 'react';

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
  }

  render() {
    return (
      <div className="body">
        <header>
          <h1>Drum Machine</h1>
        </header>
        <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}
