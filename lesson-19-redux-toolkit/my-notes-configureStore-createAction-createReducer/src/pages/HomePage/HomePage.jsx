import Container from '@mui/material/Container';

import Main from "../../modules/Main/Main";

import MyNotes from "../../modules/MyNotes/MyNotes";

const HomePage = ()=> {
    return (
        <Main>
            <Container>
                <MyNotes />
            </Container>
        </Main>
    )
}

export default HomePage;