import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import Songs from "../../modules/Songs/Songs";

const SongsPage = ()=> {
    return (
        <Main>
            <Container>
                <PageTitle>Songs page</PageTitle>
                <Songs />
            </Container>
        </Main>
    )
}

export default SongsPage;