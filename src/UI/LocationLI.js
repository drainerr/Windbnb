import { MdLocationOn } from 'react-icons/md';
import styles from './LocationLi.module.css';
const LocationLi = (props) => {
  const { onClick, className, children } = props;
  return (
    <li className={`${className} ${styles.listItem}`} onClick={onClick}>
      <span className={styles.locationMarkIcon}>
        <MdLocationOn />
      </span>
      <span className={styles.locationName}>{children}</span>
    </li>
  );
};

export default LocationLi;
