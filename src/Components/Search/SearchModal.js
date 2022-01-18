import styles from './SearchModal.module.css';
import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import Button from '../../UI/Button';

const SearchModal = (props) => {
  return (
    <div className={styles.searchModal}>
      <div className={styles.searchField}>
        <div className={styles.searchLocation}>
          <span className={styles.locationLabel}>LOCATION</span>
          <span className={styles.locationName}>Helsinki,Finland!</span>
        </div>
        <div className={styles.guests}>
          <label>GUESTS</label>
          <input type="text" placeholder="Add Guest"></input>
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
