import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';

function App() {
  const [chosenLocation, setChosenLocation] = useState('Helsinki, Finland');
  return (
    <div className="App">
      <Header
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
      />
      <Main />
    </div>
  );
}

export default App;
