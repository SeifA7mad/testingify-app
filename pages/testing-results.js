import { useContext } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';

import ResultsTable from '../components/table/ResultsTable';

const testingResultsColumns = [
  {
    Header: 'Test Results',
    columns: [
      {
        Header: 'Route',
        accessor: 'route'
      },
      {
        Header: 'Operation',
        accessor: 'operation'
      },
      {
        Header: 'URL',
        accessor: 'url'
      },
      {
        Header: 'Test Type',
        accessor: 'testType'
      },
      {
        Header: 'Expected Status Code',
        accessor: 'expectedStatusCode'
      },
      {
        Header: 'Actual Status Code',
        accessor: 'actualStatusCode'
      },
      {
        Header: 'Status Text',
        accessor: 'statusText'
      },
      {
        Header: 'Mutation Applied',
        accessor: 'mutationApplied'
      },
      { Header: 'Passed?', accessor: 'passed' }
    ]
  }
];
const columns = [
  {
    Header: 'Route',
    accessor: 'route'
  },
  {
    Header: 'Fitness Value',
    accessor: 'fitnessValue'
  }
];

const DABC_fitnessResultsColumns = [
  {
    Header: 'DABC_HS Fitness Results',
    columns: columns
  }
];

const ABC_fitnessResultsColumns = [
  {
    Header: 'ABC Fitness Results',
    columns: columns
  }
];

const alterDataTestResults = (dataResults) => {
  const newDataResults = [];

  for (const route in dataResults) {
    newDataResults.push(
      ...dataResults[route].map((op) => {
        return {
          route: route,
          operation: op.operation,
          url: op.url,
          testType: op.testType,
          expectedStatusCode: op.expectedStatusCode,
          actualStatusCode: op.actualStatusCode,
          statusText: op.statusText,
          passed: op.passed.toString(),
          mutationApplied: op.mutationApplied.map(
            (ma) => `${ma.inputName}: ${ma.txt},`
          )
        };
      })
    );
  }

  return newDataResults;
};

const alterDataFitnessResults = (routes, fitnessResults) => {
  const newDataResults = [];

  for (let i = 0; i < routes.length; i++) {
    newDataResults.push({
      route: routes[i],
      fitnessValue: fitnessResults[i]
    });
  }

  return newDataResults;
};

const extractNumberValues = (dataResults) => {
  let numberOfFaults = 0;
  let numberOfTests = 0;

  if (!dataResults) return undefined;

  for (const route in dataResults) {
    numberOfFaults += dataResults[route].filter((op) => !op.passed).length;
    numberOfTests += dataResults[route].length;
  }

  return {
    numberOfFaults,
    numberOfTests
  };
};

const TestingResultsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);

  const isResultsNotEmtpy = !!testingResultsCtx.resultsData;

  const { numberOfFaults, numberOfTests } = extractNumberValues(
    testingResultsCtx?.resultsData?.testResults || {}
  );

  return (
    <>
      {isResultsNotEmtpy && testingResultsCtx.resultsData.testResults && (
        <ResultsTable
          columns={testingResultsColumns}
          data={alterDataTestResults(testingResultsCtx.resultsData.testResults)}
        />
      )}
      {isResultsNotEmtpy &&
        testingResultsCtx.resultsData.DABC_fitnessValues && (
          <div style={{ display: 'flex' }}>
            <ResultsTable
              columns={DABC_fitnessResultsColumns}
              data={alterDataFitnessResults(
                testingResultsCtx.resultsData.routes,
                testingResultsCtx.resultsData.DABC_fitnessValues
              )}
            />
            <ResultsTable
              columns={ABC_fitnessResultsColumns}
              data={alterDataFitnessResults(
                testingResultsCtx.resultsData.routes,
                testingResultsCtx.resultsData.ABC_fitnessValues
              )}
            />
          </div>
        )}

      {isResultsNotEmtpy && (
        <h1>
          {' '}
          no. #Faults: {numberOfFaults}
          <br />
          no. #Tests: {numberOfTests}
        </h1>
      )}

      {!isResultsNotEmtpy && <h1> No Test Results yet!! </h1>}
    </>
  );
};

export default TestingResultsPage;
