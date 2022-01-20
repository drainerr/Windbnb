import styles from './StaysWrapper.module.css';
import Card from '../../UI/Card';
const StaysWrapper = (props) => {
  const { data } = props;
  return (
    <div className={styles.staysWrapper}>
      {data.map((card, i) => {
        return (
          <Card
            key={`${Math.random() * (100 - 1) + 1}${i}`}
            imgUrl={card.photo}
            title={card.title}
            rating={card.rating}
            type={card.type}
            beds={card.beds}
            superHost={card.superHost}
          />
        );
      })}
    </div>
  );
};

export default StaysWrapper;
