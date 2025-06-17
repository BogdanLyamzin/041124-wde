import Main from "../../modules/Main/Main";
import Container from "../../shared/components/Container/Container";

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