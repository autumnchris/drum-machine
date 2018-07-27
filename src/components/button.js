import React from 'react';

const Button = ({ button }) => {

  return (
    <button type="button" className="drum-pad" id={button.type}>{button.key}<audio src={button.sound} className="clip" id={button.key} /></button>
  );
}

export default Button;
