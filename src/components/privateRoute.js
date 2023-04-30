import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, onLogout, ...rest }) => {
  if (isLoggedIn) {
    return <Component onLogout={onLogout} {...rest} />;
  } else {
    return <Navigate to="/login" replace/>;
  }
};


export default PrivateRoute;
