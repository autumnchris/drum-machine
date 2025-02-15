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
      <aside>
        <div className="instructions-container">
          <button type="button" className="button instructions-button" onClick={() => setPopoverVisible(!popoverVisible)} aria-label="Drum machine instructions" title="Instructions" id="instructions-button">
            <span className="fa-solid fa-circle-question instructions-icon"></span>
          </button>
          {popoverVisible && <InstructionsPopover />}
        </div>
      </aside>
      <h1>Drum Machine</h1>
  </header>
  );
}

export default Header;