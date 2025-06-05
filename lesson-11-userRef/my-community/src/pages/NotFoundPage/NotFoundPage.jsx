import { Link, useLocation } from "react-router-dom";

import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Button from "../../shared/components/Button/Button";

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Container>
        <PageTitle>{location.pathname} - page not found</PageTitle>
        <Link to="/">
          <Button>To home page</Button>
        </Link>
      </Container>
    </Main>
  );
};

export default NotFoundPage;
