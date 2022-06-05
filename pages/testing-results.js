import { useContext, useEffect, useState } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';

import ResultsTable from '../components/table/ResultsTable';

const testingResultsColumns = [
  {
    Header: 'Test Results',
    columns: [
      {
        Header: 'Route',
        accessor: 'route',
      },
      {
        Header: 'Operation',
        accessor: 'operation',
      },
      {
        Header: 'URL',
        accessor: 'url',
      },
      {
        Header: 'Test Type',
        accessor: 'testType',
      },
      {
        Header: 'Expected Status Code',
        accessor: 'expectedStatusCode',
      },
      {
        Header: 'Actual Status Code',
        accessor: 'actualStatusCode',
      },
      {
        Header: 'Status Text',
        accessor: 'statusText',
      },
      {
        Header: 'Mutation Applied',
        accessor: 'mutationApplied',
      },
      { Header: 'Passed?', accessor: 'passed' },
    ],
  },
];

const fitnessResultsColumns = [
  {
    Header: 'Fitness Results',
    columns: [
      {
        Header: 'Route',
        accessor: 'route',
      },
      {
        Header: 'Fitness Value',
        accessor: 'fitnessValue',
      },
    ],
  },
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
          ),
        };
      })
    );
  }

  return newDataResults;
};

const alterDataFitnessResults = (testResults, fitnessResults) => {
  const newDataResults = [];

  const routes = Object.keys(testResults);

  for (let i = 0; i < routes.length; i++) {
    newDataResults.push({
      route: routes[i],
      fitnessValue: fitnessResults[i],
    });
  }

  return newDataResults;
};

const testingResultsPage = () => {
  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsNotEmtpy = !!testingResultsCtx.resultsData;

  return (
    <>
      {isResultsNotEmtpy && (
        <>
          <ResultsTable
            columns={testingResultsColumns}
            data={alterDataTestResults(
              testingResultsCtx.resultsData.testResults
            )}
          />
          <ResultsTable
            columns={fitnessResultsColumns}
            data={alterDataFitnessResults(
              testingResultsCtx.resultsData.testResults,
              testingResultsCtx.resultsData.fitnessValues
            )}
          />
        </>
      )}
      {!isResultsNotEmtpy && <h1> No Test Results yet!! </h1>}
    </>
  );
};

export default testingResultsPage;
