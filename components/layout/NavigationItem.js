import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const router = useRouter();

  return (
    <li className={classes.navigationItem}>
      <Link href={props.link} passHref>
        <a className={router.pathname === props.link ? classes.active : null}>
          {props.children}
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
