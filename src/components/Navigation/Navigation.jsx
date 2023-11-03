import css from './Navigation.module.css';

import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectIsLoggedIn);

  return (
    <nav className={css['nav-container']}>
      <NavLink className={({ isActive }) =>
                `${css['nav-link']} ${isActive ? css.active : ''}`
              } to="/">
        Home
      </NavLink>
      {authenticated ? (
        <>
          <NavLink className={({ isActive }) =>
                `${css['nav-link']} ${isActive ? css.active : ''}`
              }to="/contacts">
            Contacts
          </NavLink>{' '}
        </>
      ) : (
        <>
          <NavLink className={({ isActive }) =>
                `${css['nav-link']} ${isActive ? css.active : ''}`
              } to="/login">
            {' '}
            Login
          </NavLink>
          <NavLink className={({ isActive }) =>
                `${css['nav-link']} ${isActive ? css.active : ''}`
              } to="/register">
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
};
