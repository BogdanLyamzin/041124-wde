import { Link } from "react-router-dom";
import Container from '@mui/material/Container';

import Main from "../../modules/Main/Main";

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