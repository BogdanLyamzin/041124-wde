import { useSelector } from "react-redux";

import Main from "../../shared/components/Main/Main";
import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import MyCommunitiesList from "../../modules/MyCommunities/MyCommunitiesList/MyCommunitiesList";

const FavoriteCommunitiesPage = () => {
  const items = useSelector((store) =>
    store.communities.filter((item) => item.favorite)
  );

  return (
    <Main>
      <Container>
        <PageTitle>Favorite communities page</PageTitle>
        <MyCommunitiesList items={items} />
      </Container>
    </Main>
  );
};

export default FavoriteCommunitiesPage;
