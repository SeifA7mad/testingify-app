import { useState, useContext } from 'react';
import { useRouter } from 'next/router';

import { TestingResultsContext } from '../context/TestingResultsContext';

const TestApiPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testingResultsCtx = useContext(TestingResultsContext);

  const router = useRouter();

  const submitFormHandler = async (formData) => {
    // setLoading = true
    // fetch post request => http://localhost:3000/testapi
    // wait for response
    
    // set response data to context => setResultsData(response.data)
    // else set Error

    // setLoading false
    // redirect to results => router.replace
  };

  return <h1> Test Your API </h1>;
};

export default TestApiPage;
