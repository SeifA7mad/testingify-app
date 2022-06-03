import classes from './LoadingBoxSpinner.module.css';

const LoadingBoxSpinner = () => {
  return (
    <div className={classes.sk_cube_grid}>
      <div className={`${classes.sk_cube} ${classes.sk_cube1}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube2}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube3}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube4}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube5}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube6}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube7}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube8}`}></div>
      <div className={`${classes.sk_cube} ${classes.sk_cube9}`}></div>
    </div>
  );
};

export default LoadingBoxSpinner