import { MdOutlineSearch as SearchIcon } from 'react-icons/md';
import styles from './SearchBtn.module.css';
import Button from '../../UI/Button';
const SearchBtn = (props) => {
  const { wrapperStyle, onClick } = props;
  return (
    <div className={wrapperStyle}>
      {' '}
      <Button onClick={onClick} className={styles.searchButton}>
        <i className={styles.searchIcon}>
          <SearchIcon />
        </i>
        <span>Search</span>
      </Button>
    </div>
  );
};

export default SearchBtn;
