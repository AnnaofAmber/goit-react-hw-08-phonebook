const { useSelector } = require("react-redux")
const { Navigate } = require("react-router-dom")
const { selectIsLoggedIn } = require("redux/auth/selectors")

export const RestrictedRoute = ({component, redirectTo}) =>{
    const auth = useSelector(selectIsLoggedIn)

    return auth? <Navigate to={redirectTo} replace/>:component
}

