const Button = ({ children, className, onClick, onFocus }) => {
  return (
    <button className={className} onClick={onClick} onFocus={onFocus}>
      {children}
    </button>
  );
};

export default Button;
