import React from 'react';
import styles from './Modal.module.css';
import SearchModal from './SearchModal';
import SearchBtn from './SearchBtn';
import Location from './Location';
const Modal = (props) => {
  const {
    active,
    onClose,
    onLocClick,
    onGuestsClick,
    objClicked,
    screenWidth,
  } = props;
  console.log(screenWidth);

  if (!active) return null;
  return (
    <React.Fragment>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modalContent}>
        <SearchModal
          onClose={onClose}
          onLocClick={onLocClick}
          onGuestsClick={onGuestsClick}
          objClicked={objClicked}
          chosenLocation={props.chosenLocation}
        />
        <Location
          onClose={onClose}
          objClicked={objClicked}
          setChosenLocation={props.setChosenLocation}
          setNumOfGuests={props.setNumOfGuests}
          getNumOfGuests={props.getNumOfGuests}
        ></Location>
        {screen.width <= 420 && <SearchBtn wrapperStyle={styles.searchBtn} />}
      </div>
    </React.Fragment>
  );
};

export default Modal;
