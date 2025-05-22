import { useEffect, useState } from "react";
// import axios from "axios";

import Modal from "../Modal/Modal";

import { getPostsApi } from "../../shared/api/posts-api";

import styles from "./Posts.module.css";

const _limit = 10;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPostsApi({ _limit, _page: page });
        // const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts((prevData) => [...prevData, ...data]);
      } catch (error) {
        setError({
          status: error.status,
          message: error.response?.data.message || error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(({data}) => {
    //         setPosts(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //         if(!response.ok) {
    //             const error = new Error(response.statusText || "Error");
    //             error.status = response.status;
    //             throw error;
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         setPosts(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
  }, [page]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const toggleModal = ()=> setModalOpen(prevState => !prevState);

  const openPostDetails = item => {
    setPostDetails(item);
    toggleModal();
  }

  const elements = posts.map((item) => (
    <li key={item.id} className={styles.item} onClick={()=> openPostDetails(item)}>
      {item.title}
    </li>
  ));

  return (
    <div>
      {modalOpen && <Modal close={()=> setModalOpen(false)}>
        <p>{postDetails?.body}</p>
      </Modal>}
      <ol>{elements}</ol>
      {loading && <p>Loading....</p>}
      {error && <p className={styles.error}>{error.message}</p>}
      {Boolean(posts?.length) && (
        <button onClick={loadMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default Posts;
