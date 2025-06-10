import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import MyChannels from "../../modules/MyChannels/MyChannels";

const ChannelsPage = ()=> {
    return (
        <Main>
            <Container>
                <PageTitle>Channels page</PageTitle>
                <MyChannels />
            </Container>
        </Main>
    )
}

export default ChannelsPage;