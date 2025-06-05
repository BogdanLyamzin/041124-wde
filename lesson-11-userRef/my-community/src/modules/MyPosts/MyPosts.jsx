import useFetch from "../../shared/hooks/useFetch";

import Container from "../../shared/components/Container/Container";

import MyPostsAddForm from "./MyPostsAddForm/MyPostsAddForm";
import MyPostsList from "./MyPostsList/MyPostsList";

import { fetchPostsApi, deletePostByIdApi, addPostApi } from "../../shared/api/posts-api";

import styles from "./MyPosts.module.css";

const MyPosts = () => {
  const { state: items, setState, loading, setLoading, error, setError, } = useFetch({
    request: fetchPostsApi,
    initialState: [],
  });

  const deletePost = async id => {
    setLoading(true);
    const {data, error} = await deletePostByIdApi(id);
    setLoading(false);
    if(data) return setState(prevItems => prevItems.filter(item => item.id !== id));
    setError(error.response?.data?.message || error.message);
  }

  const addPost = async payload => {
    setLoading(true);
    const {data, error} = await addPostApi(payload);
    setLoading(false);
    if(data) return setState(prevItems => [...prevItems, data]);
    setError(error.response?.data?.message || error.message);
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
