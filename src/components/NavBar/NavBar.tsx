import { Link } from 'react-router-dom';
import { StyleNavigation } from './NavBar.styles';

export const NavBar = () => {
  return (
    <>
      <StyleNavigation>
        <li>
          <Link to={'button'}>Button</Link>
        </li>
        <li>
          <Link to={'date'}> Date</Link>
        </li>
        <li>
          <Link to={'form'}>Form </Link>
        </li>
      </StyleNavigation>
    </>
  );
};
