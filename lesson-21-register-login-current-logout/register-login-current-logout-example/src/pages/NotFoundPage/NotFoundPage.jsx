import { Link } from "react-router-dom";

import Container from "../../shared/components/Container/Container";

const NotFoundPage = () => {
  return (
    <Container>
      <h1>Page not found</h1>
      <Link to="/">To home page</Link>
    </Container>
  );
};

export default NotFoundPage;
