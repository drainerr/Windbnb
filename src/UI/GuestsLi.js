import Li from './Li';
import CountControls from './CountControls';
const GuestsLi = (props) => {
  const {
    className,
    labelStyle,
    label,
    definitionStyle,
    definition,
    numOfGuests,
    incHandler,
    decHandler,
  } = props;
  return (
    <Li className={className}>
      <span className={labelStyle}>{label}</span>
      <span className={definitionStyle}>{definition}</span>
      <CountControls incHandler={incHandler} decHandler={decHandler}>
        {numOfGuests}
      </CountControls>
    </Li>
  );
};

export default GuestsLi;
