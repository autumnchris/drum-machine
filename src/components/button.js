import React from 'react';

const Button = ({ button, playSound }) => {

  return (
    <div className="drum-pad" onClick={(event) => playSound(event, button.key)} tabIndex="-1" id={button.type}>
      <div className="sound-type">{button.type}</div>
      <div className="sound-key">{button.key}</div>
      <audio src={button.sound} className="clip" id={button.key} />
    </div>
  );
}

export default Button;
