import { useParams, useNavigate } from "react-router-dom";

import Button from "../../shared/components/Button/Button";

import useFetch from "../../shared/hooks/useFetch";

import { getSongByIdApi } from "../../shared/api/songs-api";

import styles from "./SingleSong.module.css";

const SingleSong = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const { state, loading, error } = useFetch({
    initialState: null,
    request: () => getSongByIdApi(id),
  });

  const goBack = ()=> navigate(-1);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>;

  return (
    <div>
        <p className={styles.item}>Название: {state?.songName}</p>
        <p className={styles.item}>Жанр: {state?.genre}</p>
        <p className={styles.item}>Альбом: {state?.album}</p>
        <p className={styles.item}>Автор: {state?.author}</p>
        <Button onClick={goBack}>Go back</Button>
    </div>
  )
};

export default SingleSong;
