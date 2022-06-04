import classes from './AuthInput.module.css';

const AuthInput = (props) => {
  return (
    <div className={classes.AuthInput}>
      <label> {`The ${props.id + 1} Auth Key`} </label>
      <div className={classes.field}>
        <input
          type='text'
          placeholder='Key Name (as stated in the OAS)'
          onChange={(e) => props.keyNameHandler(e.target.value, props.id)}
        />
      </div>
      <div className={classes.field}>
        <input
          type='text'
          placeholder='Key Value'
          onChange={(e) => props.keyValueHandler(e.target.value, props.id)}
        />
      </div>
    </div>
  );
};

export default AuthInput;
