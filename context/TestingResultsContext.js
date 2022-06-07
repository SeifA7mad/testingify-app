import { createContext, useState } from 'react';

export const TestingResultsContext = createContext({
  resultsData: null,
  testResultsIsLoading: false,
  setResultsData(resultsData) {},
  setLoadingStatus(isLoading) {},
});

const TestingResultsContextProvider = ({ children }) => {
  const [testingResultsData, setTestingResultsData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const setTestingResultsDataHandler = (resultsData) => {
    setTestingResultsData(resultsData);
  };

  const setLoadingStatusHandler = (isLoading) => {
    setLoadingStatus(isLoading);
  };

  const contextData = {
    resultsData: testingResultsData,
    testResultsIsLoading: loadingStatus,
    setResultsData: setTestingResultsDataHandler,
    setLoadingStatus: setLoadingStatusHandler
  };

  return (
    <TestingResultsContext.Provider value={contextData}>
      {children}
    </TestingResultsContext.Provider>
  );
};

export default TestingResultsContextProvider;
