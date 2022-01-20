import React, { useState } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import data from './stays.json';
import { getCityAndCountry } from './Helpers/helper';

function App() {
  const [chosenLocation, setChosenLocation] = useState('Helsinki, Finland');
  const [numOfAdultGuests, setNumOfAdultGuests] = useState(0);
  const [numOfChildrenGuests, setNumOfChildrenGuests] = useState(0);
  console.log(numOfAdultGuests, numOfChildrenGuests);
  const setNumOfGuests = {
    adults: setNumOfAdultGuests,
    children: setNumOfChildrenGuests,
  };
  const getNumOfGuests = {
    adults: numOfAdultGuests,
    children: numOfChildrenGuests,
  };
  console.log(data[1]);
  const filteredStays = data.filter(
    (stay) =>
      stay.city === getCityAndCountry(chosenLocation).city &&
      numOfAdultGuests + numOfChildrenGuests <= stay.maxGuests
  );

  return (
    <div className="App">
      <Header
        chosenLocation={chosenLocation}
        setChosenLocation={setChosenLocation}
        setNumOfGuests={setNumOfGuests}
        getNumOfGuests={getNumOfGuests}
      />
      <Main
        aboutStays={{
          numOfStays: filteredStays.length,
          selectedCountry: getCityAndCountry(chosenLocation).country,
        }}
        stays={filteredStays}
      />
      <footer className="footer">
        created by{' '}
        <span>
          <a href="https://github.com/GeorgeKVR">GeorgeKVR</a>
        </span>{' '}
        - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
