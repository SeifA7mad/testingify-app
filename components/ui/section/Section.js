import classes from './Section.module.css';

const Section = (props) => {
  return (
    <section className={classes.section}>
      <h2> {props.title} </h2>
      {props.children}
    </section>
  );
};

export default Section;
