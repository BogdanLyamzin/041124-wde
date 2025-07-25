import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../redux/auth/auth-thunks";
import { selectAuth } from "../../redux/auth/auth-selectors";

const Register = () => {
  const { loading, error } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const onRegiser = (payload) => {
    dispatch(registerUser(payload));
  };

  return (
    <Container>
      <RegisterForm submitForm={onRegiser} />
      {loading && <p>Loading...</p>}
      {error && <p>Register error: {error}</p>}
    </Container>
  );
};

export default Register;
