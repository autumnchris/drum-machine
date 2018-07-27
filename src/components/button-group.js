import React from 'react';
import Button from './button';

const ButtonGroup = ({ buttons, playSound }) => {

  const Buttons = buttons.map((button, index) => {
    return <Button key={index} button={button} playSound={playSound} />;
  });

  return (
    <div className="button-group">{Buttons}</div>
  );
}

export default ButtonGroup;
