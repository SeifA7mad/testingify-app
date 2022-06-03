import Link from 'next/link';
import { useContext } from 'react';

import { TestingResultsContext } from '../../context/TestingResultsContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const testingResultsCtx = useContext(TestingResultsContext);

  const isResultsEmtpy = !!testingResultsCtx.resultsData;

  return (
    <header className={classes.header}>
      <div className={classes.logo}> Testingify RestAPI </div>
      <nav>
        <ul>
          <li>
            <Link href='/'> Home </Link>
          </li>
          <li>
            <Link href='/test-api'> Test Your API </Link>
          </li>
          {isResultsEmtpy && (
            <>
              <li>
                <Link href='/testing-results'> Results </Link>
              </li>
              <li>
                <Link href='/testing-statistics'> Statistics </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
