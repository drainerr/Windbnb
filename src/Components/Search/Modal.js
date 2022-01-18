import React from 'react';
import styles from './Modal.module.css';
import SearchModal from './SearchModal';
const Modal = ({ active, onClose }) => {
  if (!active) return null;
  return (
    <React.Fragment>
      <div className={styles.modalOverlay}></div>
      <SearchModal onClose={onClose} />
    </React.Fragment>
  );
};

export default Modal;
