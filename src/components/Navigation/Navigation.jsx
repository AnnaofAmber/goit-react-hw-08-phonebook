import css from './Navigation.module.css';

import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectIsLoggedIn);

  return (
    <nav className={css['nav-container']}>
      <NavLink className={css['nav-link']} to="/">
        Home
      </NavLink>
      {authenticated ? (
        <>
          <NavLink className={css['nav-link']} to="/contacts">
            Contacts
          </NavLink>{' '}
        </>
      ) : (
        <>
          <NavLink className={css['nav-link']} to="/login">
            {' '}
            Login
          </NavLink>
          <NavLink className={css['nav-link']} to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};
