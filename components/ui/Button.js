import classes from './Button.module.css';

const btnClasses = {
  true: classes.green,
  false: classes.red
};

const Button = (props) => {
  return (
    <button className={`${classes.btn} ${btnClasses[props.class]}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
