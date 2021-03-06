import React from 'react';
import Logo from '../../Assets/logo.svg';
import Search from '../Search/Search';
import styles from './Header.module.css';
const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.logoWrapper}>
        <img src={Logo} />
      </div>
      <Search
        setNumOfGuests={props.setNumOfGuests}
        getNumOfGuests={props.getNumOfGuests}
        chosenLocation={props.chosenLocation}
        setChosenLocation={props.setChosenLocation}
        screenWidth={props.screenWidth}
      />
    </div>
  );
};

export default Header;
