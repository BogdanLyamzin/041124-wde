import Button from "../../../shared/components/Button/Button";

import styles from "./MyPostsList.module.css";

const MyPostsList = ({items = [], deletePost})=> {
    const elements = items.map(({id, title, text})=> (
        <li key={id} className={styles.post}>
            <div>
                <h6 className={styles.title}>{title}</h6>
                <p className={styles.text}>{text}</p>
            </div>
            <div className={styles.leftBlock}>
                <p className={styles.id}>id {id}</p>
                <Button onClick={()=> deletePost(id)}>Удалить</Button>
            </div>
        </li>
    ));

    return (
        <ul>{elements}</ul>
    )
}

export default MyPostsList;