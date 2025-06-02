import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import SingleSong from "../../modules/SingleSong/SingleSong";

const SingleSongsPage = ()=> {
    return (
        <Main>
            <Container>
                <PageTitle>Single song page</PageTitle>
                <SingleSong />
            </Container>
        </Main>
    )
}

export default SingleSongsPage;