import { Navigate } from "react-router-dom";

const PublicRoute: any = ({ children }: any) => {
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  return !isLoggedIn ? children : <Navigate to={"/"} />;
};

export default PublicRoute;
