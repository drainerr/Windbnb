import React, { useState, useEffect } from 'react';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import Button from '../../UI/Button';
import Modal from './Modal';
import styles from './Search.module.css';

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [chosenLocation, setChosenLocation] = useState('Helsinki, Finland');
  const [objClicked, setObjClicked] = useState('location');
  console.log(objClicked);

  return (
    <React.Fragment>
      <Modal
        active={isSearchActive}
        onClose={() => setIsSearchActive(false)}
        onLocClick={() => setObjClicked('location')}
        onGuestsClick={() => setObjClicked('guests')}
        objClicked={objClicked}
      />
      <div className={styles.searchWrapper}>
        <div className={styles.location}>
          <Button onFocus={() => setIsSearchActive(true)}>
            Helsinki, Finland
          </Button>
        </div>
        <div className={styles.guests}>
          <Button onFocus={() => setIsSearchActive(true)}>Add guests</Button>
        </div>
        <Button
          className={styles.searchBtn}
          onFocus={() => setIsSearchActive(true)}
        >
          <SearchIcon />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Search;
