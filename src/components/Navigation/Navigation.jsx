import css from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/auth/selectors'

export const Navigation = () =>{
const authenticated = useSelector(selectIsLoggedIn)
console.log(authenticated);
    return(
        <nav className={css['nav-container']}>
            <NavLink className={css['nav-link']} to="/">Home</NavLink>
            {authenticated ? <><NavLink className={css['nav-link']} to="/contacts">Contacts</NavLink> <button className={css['nav-btn']}>Log out</button></>: <>
            <NavLink className={css['nav-link']} to="/login"> Login</NavLink>
            <NavLink className={css['nav-link']}to="/register">Register</NavLink>
            
            </>}

        </nav>
    )
}