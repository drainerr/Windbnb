import React, { useState } from 'react';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import Button from '../../UI/Button';
import Modal from './Modal';
import styles from './Search.module.css';

const Search = (props) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [objClicked, setObjClicked] = useState('location');

  return (
    <React.Fragment>
      <Modal
        active={isSearchActive}
        onClose={() => setIsSearchActive(false)}
        onLocClick={() => setObjClicked('location')}
        onGuestsClick={() => setObjClicked('guests')}
        objClicked={objClicked}
        chosenLocation={props.chosenLocation}
        setChosenLocation={props.setChosenLocation}
      />
      <div className={styles.searchWrapper}>
        <div className={styles.location}>
          <Button
            onClick={() => {
              setObjClicked('location');
              setIsSearchActive(true);
            }}
          >
            {props.chosenLocation}
          </Button>
        </div>
        <div className={styles.guests}>
          <Button
            onClick={() => {
              setObjClicked('guests');
              setIsSearchActive(true);
            }}
          >
            Add guests
          </Button>
        </div>
        <Button
          className={styles.searchBtn}
          onClick={() => setIsSearchActive(true)}
        >
          <SearchIcon />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Search;
