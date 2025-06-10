import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import MyCommunitiesAddForm from "./MyCommunitiesAddForm/MyCommunitiesAddForm";
import MyCommunitiesList from "./MyCommunitiesList/MyCommunitiesList";

import { addCommunityCreator, deleteCommunityCreator } from "../../redux/actionCreators";

import styles from "./MyCommunities.module.css";

const MyCommunities = () => {
  const items = useSelector(store => store.communities);
  const dispatch = useDispatch();

  const addCommunity = payload => {
    const action = addCommunityCreator(payload);
    dispatch(action);
  }

  const deleteCommunity = id => {
    dispatch(deleteCommunityCreator(id));
  }

  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.block}>
          <h4 className={styles.title}>Список моих телеграм-каналов</h4>
          <MyCommunitiesList items={items} deleteCommunity={deleteCommunity}  />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Добавить канал</h4>
          <MyCommunitiesAddForm submitForm={addCommunity} />
        </div>
      </div>
    </Container>
  );
};

export default MyCommunities;
