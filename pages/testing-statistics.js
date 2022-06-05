import { useContext } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';
import FitnessChart from '../components/chart/FitnessChart';

const testingStatisticsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsNotEmtpy = !!testingResultsCtx.resultsData;

  return (
    isResultsNotEmtpy && (
      <FitnessChart chartValues={testingResultsCtx.resultsData.fitnessValues} />
    )
  );
};

export default testingStatisticsPage;
