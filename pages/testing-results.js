import { useContext } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';

const testingResultsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsEmtpy = !!testingResultsCtx.resultsData;
  
  return <h1>testing-results</h1>;
};

export default testingResultsPage;
