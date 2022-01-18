import React, { useState, useEffect } from 'react';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import Modal from './Modal';
import styles from './Search.module.css';

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <React.Fragment>
      <Modal active={isSearchActive} onClose={() => setIsSearchActive(false)} />
      <div className={styles.searchWrapper}>
        <div className={styles.Location}>
          <input
            type="text"
            placeholder="Where are you going?"
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
