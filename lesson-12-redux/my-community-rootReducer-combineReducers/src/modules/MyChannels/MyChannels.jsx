import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import MyChannelsAddForm from "./MyChannelsAddForm/MyChannelsAddForm";
import MyChannelsList from "./MyChannelsList/MyChannelsList";

import { addChannelCreator, deleteChannelCreator } from "../../redux/channels/channels-action-creators";

import { selectAllChannels } from "../../redux/channels/channels-selectors";

import styles from "./MyChannels.module.css";

const MyChannels = () => {
  const items = useSelector(selectAllChannels);
  const dispatch = useDispatch();

  const addChannel = payload => {
    const action = addChannelCreator(payload);
    dispatch(action);
  }

  const deleteChannel = id => {
    dispatch(deleteChannelCreator(id));
  }

  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.block}>
          <h4 className={styles.title}>Список моих телеграм-каналов</h4>
          <MyChannelsList items={items} deleteCommunity={deleteChannel}  />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Добавить канал</h4>
          <MyChannelsAddForm submitForm={addChannel} />
        </div>
      </div>
    </Container>
  );
};

export default MyChannels;
