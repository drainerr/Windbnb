import { MdLocationOn } from 'react-icons/md';
import styles from './LocationLi.module.css';
const LocationLi = ({ className, children }) => {
  return (
    <li className={`${className} ${styles.listItem}`}>
      <span className={styles.locationMarkIcon}>
        <MdLocationOn />
      </span>
      <span className={styles.locationName}>{children}</span>
    </li>
  );
};

export default LocationLi;
