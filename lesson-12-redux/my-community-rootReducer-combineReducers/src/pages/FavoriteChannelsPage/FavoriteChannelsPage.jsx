import { useSelector } from "react-redux";

import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import MyChannelsList from "../../modules/MyChannels/MyChannelsList/MyChannelsList";

import { selectFavoriteChannels } from "../../redux/channels/channels-selectors";

const FavoriteChannelsPage = () => {
  const items = useSelector(selectFavoriteChannels);

  return (
    <Main>
      <Container>
        <PageTitle>Favorite channels page</PageTitle>
        <MyChannelsList items={items} />
      </Container>
    </Main>
  );
};

export default FavoriteChannelsPage;
