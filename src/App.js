import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import data from './stays.json';
import { getSelectedCountry } from './Helpers/helper';

function App() {
  const [chosenLocation, setChosenLocation] = useState('Helsinki, Finland');
  console.log(data[1]);
  return (
    <div className="App">
      <Header
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
      />
      <Main
        aboutStays={{
          numOfStays: data.length,
          selectedCountry: getSelectedCountry(chosenLocation),
        }}
        stays={data}
      />
      <footer className="footer">
        created by <span>GeorgeKVR</span> - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
