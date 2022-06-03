import Link from 'next/link';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
      <header className={classes.header}>
        <div className={classes.logo}> Testingify RestAPI </div>
        <nav>
          <ul>
            <li>
              <Link href='/'> Home </Link>
            </li>
            <li>
              <Link href='/upload-oas'> Test Your API </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default MainNavigation;