import React from 'react';
import styles from './Modal.module.css';
import SearchModal from './SearchModal';
import Destination from './Destination';
const Modal = (props) => {
  const { active, onClose, onLocClick, onGuestsClick, objClicked } = props;

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
        <Destination
          objClicked={objClicked}
          setChosenLocation={props.setChosenLocation}
        ></Destination>
      </div>
    </React.Fragment>
  );
};

export default Modal;
