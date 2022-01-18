import React from 'react';
import Logo from '../../Assets/logo.svg';
import Search from '../Search/Search';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logoWrapper}>
        <img src={Logo} />
      </div>
      <Search />
    </div>
  );
};

export default Header;
