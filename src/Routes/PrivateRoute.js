import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ loginUser }) => {
  if (!loginUser.token) {
    return <h1>Please Login...</h1>;
  }

  return loginUser ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoutes;
