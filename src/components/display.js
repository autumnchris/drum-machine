import React from 'react';

const Display = ({ currentAudio }) => {

  return (
    <p className="display" id="display">{currentAudio}</p>
  );
}

export default Display;
