import { Link } from "react-router-dom";

import Main from "../../modules/Main/Main";
import Container from "../../shared/components/Container/Container";

const NotFoundPage = ()=> {
    return (
        <Main>
            <Container>
                <h1>Page not found</h1>
                <Link to="/">To main page</Link>
            </Container>
        </Main>
    )
}

export default NotFoundPage;