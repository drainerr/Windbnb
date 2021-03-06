import React from 'react';
import styles from './SearchModal.module.css';
import SearchBtn from './SearchBtn';
import SearchModalMobile from './SearchModalMobile';

const SearchModal = (props) => {
  const { objClicked, onLocClick, onGuestsClick, onClose } = props;
  if (screen.width <= 420) {
    return (
      <SearchModalMobile
        chosenLocation={props.chosenLocation}
        onLocClick={onLocClick}
        onGuestsClick={onGuestsClick}
        onClick={onClose}
        objClicked={objClicked}
      />
    );
  }
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
          <span className={styles.locationName}>
            <span className={styles.chosenLocation}>
              {props.chosenLocation}
            </span>
          </span>
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
        <SearchBtn
          onClick={onClose}
          wrapperStyle={styles.searchButtonWrapper}
        />
      </div>
    </div>
  );
};

export default SearchModal;
