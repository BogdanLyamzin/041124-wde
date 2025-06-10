import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import MyCommunities from "../../modules/MyCommunities/MyCommunities";

const CommunitiesPage = ()=> {
    return (
        <Main>
            <Container>
                <PageTitle>Communities page</PageTitle>
                <MyCommunities />
            </Container>
        </Main>
    )
}

export default CommunitiesPage;