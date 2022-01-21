import React from 'react';
import styles from './SearchModalMobile.module.css';
import { MdClose as CloseIcon } from 'react-icons/md';
import Button from '../../UI/Button';
const SearchModalMobile = (props) => {
  const { onLocClick, onGuestsClick, onClick, objClicked } = props;
  return (
    <React.Fragment>
      <div className={styles.topPanel}>
        <h5>Edit your search</h5>
        <Button onClick={onClick} className={styles.closeBtn}>
          <CloseIcon />
        </Button>
      </div>
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
      </div>
    </React.Fragment>
  );
};

export default SearchModalMobile;
