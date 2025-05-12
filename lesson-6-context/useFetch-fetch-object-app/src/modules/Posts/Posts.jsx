import useTheme from "../../shared/hooks/useTheme";
import usePosts from "../../shared/hooks/usePosts";

import styles from "./Posts.module.css";

const Posts = () => {
  const { theme } = useTheme();
  const { loading, error, posts } = usePosts();

  const elements = posts.map(({ id, title }) => (
    <li key={id} className={`${styles.item} ${styles[theme]}`}>
      {title}
    </li>
  ));

  const isPosts = Boolean(posts.length);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p style={{ color: "red" }}>Loading error {error}</p>}
      {isPosts && <ol>{elements}</ol>}
    </div>
  );
};

export default Posts;
