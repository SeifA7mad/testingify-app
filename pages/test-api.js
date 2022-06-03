import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import { TestingResultsContext } from '../context/TestingResultsContext';
import LoadingBoxSpinner from '../components/ui/loading-spinner/LoadingBoxSpinner';
import UploadForm from '../components/upload-form/UploadForm';

const TestApiPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testingResultsCtx = useContext(TestingResultsContext);

  const router = useRouter();

  const postHttpFileHandler = async (formData) => {
    // setLoading = true
    setIsLoading(true);
    // fetch post request => http://localhost:3000/testapi
    // wait for response
    try {
      const response = await fetch('http://localhost:3000/testapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Request Failed...');
      }

      const data = await response.json();

      // set response data to context => setResultsData(response.data)
      console.log(data);
      testingResultsCtx.setResultsData(data);
    } catch (err) {
      // else set Error
      setError(err.message || 'Something went wrong..');
    }


    // setLoading false
    setIsLoading(false);
    // redirect to results => router.replace
  };

  return (
    <>
      {isLoading && <LoadingBoxSpinner />}
      {!isLoading && <UploadForm sendFileHandler={postHttpFileHandler} />}
    </>
  );
};

export default TestApiPage;
