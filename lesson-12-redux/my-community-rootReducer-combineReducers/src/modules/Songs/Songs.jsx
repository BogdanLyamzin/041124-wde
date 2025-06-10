import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Button from "../../shared/components/Button/Button";

import { getSongsApi } from "../../shared/api/songs-api";

import styles from "./Songs.module.css";

const limit = 10;

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
 
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await getSongsApi({ page, limit });
      setLoading(false);
      if (data) return setSongs(data);
      setError(error.response?.data?.message || error.message);
    };

    fetchItems();
  }, [getSongsApi, page]);

  const toNextPage = () => setSearchParams(searchParams => {
    searchParams.set("page", page + 1);
    return searchParams;
  });

  const toPrevPage = () => setSearchParams(searchParams => {
    searchParams.set("page", page - 1);
    return searchParams;
  });;

  const elements = songs.map(({ id, songName }) => (
    <li key={id} className={styles.item}>
      <Link to={`/songs/${id}`} className={styles.link}>
        {songName}
      </Link>
    </li>
  ));

  return (
    <>
      {Boolean(songs.length) && <ul className={styles.list}>{elements}</ul>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {Boolean(songs.length) && (
        <>
          {page > 1 && <><Button onClick={toPrevPage}>To {page - 1} page</Button>{" "}</>}
          <Button onClick={toNextPage}>To {page + 1} page</Button>
        </>
      )}
    </>
  );
};

export default Songs;
