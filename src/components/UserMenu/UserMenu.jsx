import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css'
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

export const UserMenu = () =>{
    const dispatch = useDispatch();
    const authenticated = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser)
    const onLogout = () => {
      dispatch(logoutThunk());
    };
    return (
        <div >
{  authenticated  && <div className={css.container}>
    <p>{user.email}</p>
    <button className={css['nav-btn']} onClick={onLogout}>

            Log out
          </button>
        </div>}
        </div>
    )
}