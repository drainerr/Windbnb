import styles from './Card.module.css';
import { MdPhoto, MdStarRate as StarIcon } from 'react-icons/md';
const Card = (props) => {
  const { imgUrl, title, rating, type, beds, superHost } = props;
  return (
    <div className={styles.card}>
      <img src={imgUrl} className={styles.img}></img>
      <div className={styles.stayDetails}>
        {superHost && (
          <div className={styles.superHost}>
            <p>SUPER HOST</p>
          </div>
        )}
        <div className={styles.type}>
          {type} . {beds} beds
        </div>
        <div className={styles.rating}>
          <span className={styles.starIcon}>
            <StarIcon />
          </span>
          {rating}
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
