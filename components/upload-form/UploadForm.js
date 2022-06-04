import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

import AuthInput from './AuthInput';
import classes from './UploadForm.module.css';

const authKeys = [];

const UploadForm = (props) => {
  const [authInputs, setAuthInputs] = useState([]);
  const fileUploadInputRef = useRef();

  const setKeyValueHandler = (value, id) => {
    authKeys[id].keyValue = value;
  };

  const setKeyNameHandler = (value, id) => {
    authKeys[id].keyName = value;
  };

  const addNewAuthInputHandler = () => {
    const newAuthInputs = [...authInputs];

    const authInput = (
      <AuthInput
        key={authInputs.length}
        id={authInputs.length}
        keyNameHandler={setKeyNameHandler}
        keyValueHandler={setKeyValueHandler}
      />
    );

    newAuthInputs.push(authInput);
    authKeys.push({
      keyName: '',
      keyValue: '',
    });
    setAuthInputs(newAuthInputs);
  };

  const removeAuthInputHandler = () => {
    const newAuthInputs = [...authInputs];
    newAuthInputs.splice(newAuthInputs.length - 1, 1);
    authKeys.splice(authKeys.length - 1, 1);
    setAuthInputs(newAuthInputs);
  };

  const uploadFileHandler = (event) => {
    event.preventDefault();
    const workingAuthKeys = [...authKeys];
    authKeys = [];
    const files = fileUploadInputRef.current.files;

    if (!files[0]) {
      props.setError('Must Select a JSON file');
      return;
    }

    const formData = new FormData();
    formData.append('oasFile', files[0]);

    for (const key of workingAuthKeys) {
      if (key.keyName === '' || key.keyValue === '') {
        props.setError("Mustn't leave the form fields Empty!!");
        return;
      }
      formData.append(key.keyName, key.keyValue);
    }
    
    props.sendFileHandler(formData);
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.fileUpload}>
        <input
          className={classes.fileUploadInput}
          type='file'
          accept='application/JSON'
          ref={fileUploadInputRef}
        />
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className={classes.authInputsBtns}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={classes.plusBtn}
          onClick={addNewAuthInputHandler}
        />
        <FontAwesomeIcon
          icon={faMinusCircle}
          className={classes.plusBtn}
          onClick={removeAuthInputHandler}
        />
      </div>
      <div className={classes.authInputs}>{authInputs}</div>
      <button onClick={uploadFileHandler}> Test API </button>
    </form>
  );
};

export default UploadForm;
