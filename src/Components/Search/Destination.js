import { useState } from 'react';
import styles from './Destination.module.css';
import LocationLi from '../../UI/LocationLI';
import GuestsLi from '../../UI/GuestsLi';

const Destination = (props) => {
  const [numOfAdultGuests, setNumOfAdultGuests] = useState(0);
  const [numOfChildrenGuests, setNumOfChildrenGuests] = useState(0);

  return (
    <div className={styles.destination}>
      {props.objClicked === 'location' ? (
        <ul className={styles.locationList}>
          <LocationLi className={styles.listItem}>Helsinki, Finland</LocationLi>
          <LocationLi className={styles.listItem}>Turku, Finland</LocationLi>
          <LocationLi className={styles.listItem}>Oulu, Finland</LocationLi>
          <LocationLi className={styles.listItem}>Vaasa, Finland</LocationLi>
        </ul>
      ) : (
        <ul className={styles.guestList}>
          <GuestsLi
            className={styles.adults}
            labelStyle={styles.adultsLabel}
            label={'Adults'}
            definitionStyle={styles.adultsDefinition}
            definition={'Ages 13 or above'}
            numOfGuests={numOfAdultGuests}
            incHandler={() => setNumOfAdultGuests((prevState) => prevState + 1)}
            decHandler={() =>
              setNumOfAdultGuests((prevState) =>
                prevState !== 0 ? prevState - 1 : 0
              )
            }
          ></GuestsLi>
          <GuestsLi
            className={styles.children}
            labelStyle={styles.childrenLabel}
            label={'Children'}
            definitionStyle={styles.childrenDefinition}
            definition={'Ages 2-12'}
            numOfGuests={numOfChildrenGuests}
            incHandler={() =>
              setNumOfChildrenGuests((prevState) => prevState + 1)
            }
            decHandler={() =>
              setNumOfChildrenGuests((prevState) =>
                prevState !== 0 ? prevState - 1 : 0
              )
            }
          ></GuestsLi>
        </ul>
      )}
    </div>
  );
};

export default Destination;
