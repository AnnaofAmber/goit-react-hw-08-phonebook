import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/auth/selectors'

export const Navigation = () =>{
const authenticated = useSelector(selectIsLoggedIn)
console.log(authenticated);
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            {authenticated ? <><NavLink to="/contacts">Contacts</NavLink> <button>Log out</button></>: <>
            <NavLink to="/login"> Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            
            </>}

        </nav>
    )
}