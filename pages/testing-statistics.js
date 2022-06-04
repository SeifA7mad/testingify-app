import { useContext } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';
import FitnessChart from '../components/chart/FitnessChart';

const testingStatisticsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsEmtpy = !!testingResultsCtx.resultsData;

  return isResultsEmtpy && <FitnessChart />;
};

export default testingStatisticsPage;
