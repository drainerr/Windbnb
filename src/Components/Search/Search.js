import React, { useState, useEffect } from 'react';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
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
        <div className={styles.Location}>
          <input
            type="text"
            value={chosenLocation}
            onFocus={() => setIsSearchActive(true)}
          />
        </div>
        <div className={styles.addGuests}>
          <input
            type="text"
            placeholder="Add guests"
            onFocus={() => setIsSearchActive(true)}
          />
        </div>
        <div
          className={styles.searchButton}
          onClick={() => setIsSearchActive(true)}
        >
          <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
