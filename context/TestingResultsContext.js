import { createContext, useState } from 'react';

export const TestingResultsContext = createContext({
  resultsData: null,
  setResultsData(resultsData) {}
});

const TestingResultsContextProvider = ({ children }) => {
  const [testingResultsData, setTestingResultsData] = useState(null);

  const setTestingResultsDataHandler = (resultsData) => {
    setTestingResultsData(resultsData);
  };

  const contextData = {
    resultsData: testingResultsData,
    setResultsData: setTestingResultsDataHandler,
  };

  return (
    <TestingResultsContext.Provider value={contextData}>
      {children}
    </TestingResultsContext.Provider>
  );
};


export default TestingResultsContextProvider;