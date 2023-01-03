import React from 'react';

const DrumPad = ({ drumPad, playSound }) => {

  return (
    <button type="button" className="button drum-pad" onClick={(event) => playSound(event, drumPad.key)} id={drumPad.type}>
      <span className="sound-type">{drumPad.type}</span>
      <span className="sound-key">{drumPad.key}</span>
      <audio src={drumPad.sound} className="clip" id={drumPad.key} />
    </button>
  );
}

export default DrumPad;
