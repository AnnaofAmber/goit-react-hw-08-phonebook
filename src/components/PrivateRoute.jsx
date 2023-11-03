const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/auth/selectors');

export const PrivateRoute = ({ component, redirectTo }) => {
  const auth = useSelector(selectIsLoggedIn);

  return auth ? component : <Navigate to={redirectTo} replace />;
};
