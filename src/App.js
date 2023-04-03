import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Display from './components/Display';
import DrumPads from './components/DrumPads';

const App = () => {
  const [currentAudio, setCurrentAudio] = useState('');

  return (
    <React.Fragment>
      <Header />
      <main>
        <Display currentAudio={currentAudio} />
        <DrumPads setCurrentAudio={setCurrentAudio} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
