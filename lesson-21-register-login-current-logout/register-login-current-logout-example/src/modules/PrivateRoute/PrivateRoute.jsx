import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import useLogin from "../../shared/hooks/useLogin";

import { selectToken } from "../../redux/auth/auth-selectors";

const PrivateRoute = ()=> {
    const isLogin = useLogin();
    const token = useSelector(selectToken);

    if(!isLogin && token) return <p>Loading...</p>;

    if(!isLogin) return <Navigate to="/login" />;

    return <Outlet />
}

export default PrivateRoute;