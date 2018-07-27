import React from 'react';
import Button from './button';

const ButtonGroup = ({ buttons }) => {

  const Buttons = buttons.map((button, index) => {
    return <Button key={index} button={button} />;
  });

  return (
    <div className="button-group">{Buttons}</div>
  );
}

export default ButtonGroup;
