import React, { useState, useEffect } from 'react';
import InstructionsPopover from './InstructionsPopover';

const Header = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('click', event => {

      if (event.target.id !== 'instructions-button' && event.target.id !== 'instructions-popover') {
        setPopoverVisible(false);
      }
    });
  }, []);

  return (
    <header>
      <div className="instructions-container">
        <button type="button" className="button instructions-button" onClick={() => setPopoverVisible(!popoverVisible)} aria-label="Instructions" title="Instructions" id="instructions-button">
          <span className="fas fa-question-circle"></span>
        </button>
        {popoverVisible && <InstructionsPopover />}
      </div>
      <h1>Drum Machine</h1>
  </header>
  );
}

export default Header;