import Button from './Button';
import styles from './CountControls.module.css';
const CountControls = (props) => {
  const { incHandler, decHandler, children, className } = props;

  return (
    <div className={className}>
      <Button className={styles.minBtn} onClick={decHandler}>
        -
      </Button>
      <span className={styles.numOfGuests}>{children}</span>
      <Button className={styles.plusBtn} onClick={incHandler}>
        +
      </Button>
    </div>
  );
};

export default CountControls;
