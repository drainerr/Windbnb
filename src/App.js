import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  const [chosenLocation, setChosenLocation] = useState('Helsinki, Finland');
  return (
    <div className="App">
      <Header
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
      />
    </div>
  );
}

export default App;
