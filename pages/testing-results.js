import { useContext, useEffect, useState } from 'react';
import { TestingResultsContext } from '../context/TestingResultsContext';

import ResultsTable from '../components/table/ResultsTable';

const alterDataResults = (dataResults) => {
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
          statusTest: op.statusTest,
          passed: op.passed.toString(),
          mutationApplied: op.mutationApplied.map((ma) => ma.txt),
        };
      })
    );
  }

  return newDataResults;
};

const testingResultsPage = () => {
  const [pageContent, setPageContent] = useState();

  const testingResultsCtx = useContext(TestingResultsContext);
  const isResultsNotEmtpy = !!testingResultsCtx.resultsData;

  const setPageContentHandler = (content) => {
    setPageContent(content);
  };

  useEffect(() => {
    if (!isResultsNotEmtpy) {
      setPageContentHandler(<h1> No Testing Results yet!! </h1>);
      return;
    }

    const testResults = testingResultsCtx.resultsData.testResults;

    const atlteredTestResults = alterDataResults(testResults);

    const columns = [
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
            accessor: 'statusTest',
          },
          {
            Header: 'Mutation Applied',
            accessor: 'mutationApplied',
          },
          { Header: 'Passed?', accessor: 'passed' },
        ],
      },
    ];

    setPageContentHandler(
      <ResultsTable columns={columns} data={atlteredTestResults} />
    );
  }, [testingResultsCtx.resultsData]);

  return pageContent;
};

export default testingResultsPage;
