import React from 'react';

const Button = ({ button, playSound }) => {

  return (
    <button type="button" className="button drum-pad" onClick={(event) => playSound(event, button.key)} id={button.type}>
      <span className="sound-type">{button.type}</span>
      <span className="sound-key">{button.key}</span>
      <audio src={button.sound} className="clip" id={button.key} />
    </button>
  );
}

export default Button;
