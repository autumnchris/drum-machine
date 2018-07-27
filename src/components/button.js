import React from 'react';

const Button = ({ button, playSound }) => {

  return (
    <button type="button" className="drum-pad" onClick={() => playSound(event, button.key)} id={button.type}>{button.key}<audio src={button.sound} className="clip" id={button.key} /></button>
  );
}

export default Button;
