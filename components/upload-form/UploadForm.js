import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import classes from './UploadForm.module.css';

const UploadForm = (props) => {
  const uploadFileHandler = (event) => {
    event.preventDefault();

    const files = event.target.files;
    const formData = new FormData();
    formData.append('oasFile', files[0]);

    props.sendFileHandler(formData);
  };

  return (
    <form className={classes.wrapper}>
      <div className={classes.fileUpload}>
        <input
          className={classes.fileUploadInput}
          type='file'
          accept='application/JSON'
          onChange={uploadFileHandler}
        />
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </form>
  );
};

export default UploadForm;
