import Link from 'next/link';
import { useContext } from 'react';

import { TestingResultsContext } from '../../context/TestingResultsContext';
import NavigationItem from './NavigationItem';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const testingResultsCtx = useContext(TestingResultsContext);

  const isResultsNotEmtpy = !!testingResultsCtx.resultsData;

  return (
    <header className={classes.header}>
      <div className={classes.logo}> Testingify RestAPI </div>
      <nav>
        <ul>
          <NavigationItem link='/'> Home </NavigationItem>
          <NavigationItem link='/test-api'> Test Your API </NavigationItem>
          {isResultsNotEmtpy && (
            <>
              <NavigationItem link='/testing-results'> Results </NavigationItem>
              <NavigationItem link='/testing-statistics'> Statistics </NavigationItem>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
