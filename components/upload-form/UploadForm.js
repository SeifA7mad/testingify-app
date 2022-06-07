import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

import AuthInput from './AuthInput';
import Button from '../ui/Button';

import classes from './UploadForm.module.css';

const UploadForm = (props) => {
  const [authInputs, setAuthInputs] = useState([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const fileUploadInputRef = useRef();

  const onChangeFileUploadHandler = () => {
    setIsFileUploaded(true);
  };

  const setKeyValueHandler = (value, id) => {
    authInputs[id].keyValue = value;
  };

  const setKeyNameHandler = (value, id) => {
    authInputs[id].keyName = value;
  };

  const addNewAuthInputHandler = () => {
    const newAuthInputs = [...authInputs];

    newAuthInputs.push({
      keyName: '',
      keyValue: '',
    });
    setAuthInputs(newAuthInputs);
  };

  const removeAuthInputHandler = () => {
    const newAuthInputs = [...authInputs];
    newAuthInputs.splice(newAuthInputs.length - 1, 1);
    setAuthInputs(newAuthInputs);
  };

  const uploadFileHandler = (event) => {
    event.preventDefault();
    const files = fileUploadInputRef.current.files;

    if (!files[0]) {
      props.setError('Must Select a JSON file');
      return;
    }

    const formData = new FormData();
    formData.append('oasFile', files[0]);

    for (const key of authInputs) {
      if (key.keyName === '' || key.keyValue === '') {
        props.setError("Mustn't leave the form fields Empty!!");
        return;
      }
      formData.append(key.keyName, key.keyValue);
    }

    props.sendFileHandler(formData);
  };

  const inputContent = authInputs.map((_, index) => (
    <AuthInput
      key={index}
      id={index}
      keyNameHandler={setKeyNameHandler}
      keyValueHandler={setKeyValueHandler}
    />
  ));

  return (
    <form className={classes.wrapper}>
      <div
        className={`${classes.fileUpload} ${
          isFileUploaded && classes.fileUploaded
        }`}
      >
        <input
          className={classes.fileUploadInput}
          type='file'
          accept='application/JSON'
          onChange={onChangeFileUploadHandler}
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
      <div className={classes.authInputs}>{inputContent}</div>
      <Button onClick={uploadFileHandler}> Test API </Button>
    </form>
  );
};

export default UploadForm;
