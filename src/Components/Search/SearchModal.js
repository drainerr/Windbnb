import React, { useState } from 'react';
import styles from './SearchModal.module.css';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import Button from '../../UI/Button';

const SearchModal = (props) => {
  const { objClicked, onLocClick, onGuestsClick } = props;
  return (
    <div className={styles.searchModal}>
      <div className={styles.searchField}>
        <div
          className={`${styles.searchLocation} ${
            objClicked === 'location' && styles.searchLocationOnFocus
          }`}
          onClick={onLocClick}
        >
          <span className={styles.locationLabel}>LOCATION</span>
          <span className={styles.locationName}>Helsinki, Finland</span>
        </div>
        <div
          className={`${styles.guests} ${
            objClicked === 'guests' && styles.guestsOnFocus
          }`}
          onClick={onGuestsClick}
        >
          <span className={styles.guestLabel}>GUESTS</span>
          <span className={styles.addGuests}>Add Guests</span>
        </div>
        <div className={styles.searchButtonWrapper}>
          <Button onClick={props.onClose} className={styles.searchButton}>
            <i className={styles.searchIcon}>
              <SearchIcon />
            </i>
            <span>Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
