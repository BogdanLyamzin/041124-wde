import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import LoginForm from "./LoginForm/LoginForm";

import { loginUser } from "../../redux/auth/auth-thunks";
import { selectAuth } from "../../redux/auth/auth-selectors";

const Login = () => {
  const { loading, error } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const onLogin = (payload) => {
    dispatch(loginUser(payload));
  };

  return (
    <Container>
      <LoginForm submitForm={onLogin} />
      {loading && <p>Loading...</p>}
      {error && <p>Register error: {error}</p>}
    </Container>
  );
};

export default Login;
