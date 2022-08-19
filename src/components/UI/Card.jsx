import classes from './Card.module.css';

const Card = (props, className) => {
  return <div className={`${classes.section} ${className}`}>{props.children}</div>;
};

export default Card;