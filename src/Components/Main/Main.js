import styles from './Main.module.css';
import StaysWrapper from './StaysWrapper';
const Main = (props) => {
  const { aboutStays, stays } = props;
  const country = aboutStays.selectedCountry;
  const numOfStays = aboutStays.numOfStays;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.aboutStays}>
        <h2>Stays in {country}</h2>
        <h6>{numOfStays > 12 ? '12+' : numOfStays} Stays</h6>
      </div>
      <StaysWrapper data={stays} />
    </div>
  );
};

export default Main;
