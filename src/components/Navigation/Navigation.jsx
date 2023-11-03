import css from './Navigation.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
  };

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
          <button className={css['nav-btn']} onClick={onLogout}>
            Log out
          </button>
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
