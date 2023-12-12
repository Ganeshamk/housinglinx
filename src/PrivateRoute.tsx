import { Navigate } from "react-router-dom";

const PrivateRoute: any = ({ children }: any) => {
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  return isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
