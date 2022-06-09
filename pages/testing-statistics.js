import { useContext } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';
import FitnessChart from '../components/chart/FitnessChart';
import Section from '../components/ui/section/Section';

const calculateStandardDeviation = (values) => {
  const mean = values.reduce((prev, cur) => prev + cur, 0) / values.length;

  let variance = 0;
  values.forEach((value) => {
    const diff = value - mean;
    variance += Math.pow(diff, 2);
  });
  variance /= values.length;

  return Math.sqrt(variance).toFixed(4);
};

const testingStatisticsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsNotEmtpy =
    !!testingResultsCtx.resultsData &&
    testingResultsCtx.resultsData.sumFitnessValues;

  return (
    isResultsNotEmtpy && (
      <>
        <FitnessChart
          chartValues={testingResultsCtx.resultsData.sumFitnessValues}
          title='DABC-HS Algorithm Fitness values'
          color='purple'
        />
        <FitnessChart
          chartValues={testingResultsCtx.resultsData.abcFitnessValues}
          title='ABC Algorithm Fitness values'
          color='indigo'
        />
        <Section title='Standard Deviation'>
          {calculateStandardDeviation(
            testingResultsCtx.resultsData.sumFitnessValues
          )}
        </Section>
      </>
    )
  );
};

export default testingStatisticsPage;
