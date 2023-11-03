import css from './HomePage.module.css'

import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/selectors"

 const HomePage = () => {
 const auth = useSelector(selectIsLoggedIn)

    return( 
    <div >
{  !auth? <div className={css.container}><h1 className={css.title}>Welcome to Phonebook.</h1>
        <p className={css.text}>Please log in or sign up to continue</p></div> : 
        <div className={css.container}>
            <h1 className={css.title}>Thank you for using our app</h1>
            </div>}
    </div>
    )
}

export default HomePage