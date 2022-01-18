import React from 'react';
import LocationLi from '../../UI/LocationLI';
import styles from './Modal.module.css';
import SearchModal from './SearchModal';
const Modal = ({ active, onClose }) => {
  if (!active) return null;
  return (
    <React.Fragment>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modalContent}>
        <SearchModal onClose={onClose} />
        <ul className={styles.locationList}>
          <LocationLi>Helsinki, Finland</LocationLi>
          <LocationLi>Turku, Finland</LocationLi>
          <LocationLi>Oulu, Finland</LocationLi>
          <LocationLi>Vaasa, Finland</LocationLi>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Modal;
