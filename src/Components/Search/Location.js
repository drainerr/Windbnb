import styles from './Location.module.css';
import LocationLi from '../../UI/LocationLI';
import GuestsLi from '../../UI/GuestsLi';

const Location = (props) => {
  const { setChosenLocation, onClose, setNumOfGuests, getNumOfGuests } = props;

  const onClickHandler = (obj) => {
    const location = obj.innerText;
    setChosenLocation((prevLocation) => location || prevLocation);
    onClose();
  };
  return (
    <div className={styles.destination}>
      {props.objClicked === 'location' ? (
        <ul className={styles.locationList}>
          <LocationLi
            className={styles.listItem}
            onClick={({ target }) => onClickHandler(target)}
          >
            Helsinki, Finland
          </LocationLi>
          <LocationLi
            className={styles.listItem}
            onClick={({ target }) => onClickHandler(target)}
          >
            Turku, Finland
          </LocationLi>
          <LocationLi
            className={styles.listItem}
            onClick={({ target }) => onClickHandler(target)}
          >
            Oulu, Finland
          </LocationLi>
          <LocationLi
            className={styles.listItem}
            onClick={({ target }) => onClickHandler(target)}
          >
            Vaasa, Finland
          </LocationLi>
        </ul>
      ) : (
        <ul className={styles.guestList}>
          <GuestsLi
            className={styles.adults}
            labelStyle={styles.adultsLabel}
            label={'Adults'}
            definitionStyle={styles.adultsDefinition}
            definition={'Ages 13 or above'}
            numOfGuests={getNumOfGuests.adults}
            incHandler={() =>
              setNumOfGuests.adults((prevState) => prevState + 1)
            }
            decHandler={() =>
              setNumOfGuests.adults((prevState) =>
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
            numOfGuests={getNumOfGuests.children}
            incHandler={() =>
              setNumOfGuests.children((prevState) => prevState + 1)
            }
            decHandler={() =>
              setNumOfGuests.children((prevState) =>
                prevState !== 0 ? prevState - 1 : 0
              )
            }
          ></GuestsLi>
        </ul>
      )}
    </div>
  );
};

export default Location;
