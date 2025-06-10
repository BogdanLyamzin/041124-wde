import { useSelector, useDispatch } from "react-redux";

import Container from "../../shared/components/Container/Container";

import MyPostsAddForm from "./MyPostsAddForm/MyPostsAddForm";
import MyPostsList from "./MyPostsList/MyPostsList";

import { addPostCreator, deletePostCreator } from "../../redux/actionCreators";

import styles from "./MyPosts.module.css";

const MyPosts = () => {
  const items = useSelector(store => store.posts);
  const dispatch = useDispatch();

  const deletePost = async id => {
    dispatch(deletePostCreator(id));
  }

  const addPost = async payload => {
    dispatch(addPostCreator(payload));
  }

  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.block}>
          <h4 className={styles.title}>Список постов</h4>
          <MyPostsList items={items} deletePost={deletePost} />
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Написать пост</h4>
          <MyPostsAddForm submitForm={addPost} />
        </div>
      </div>
    </Container>
  );
};

export default MyPosts;
