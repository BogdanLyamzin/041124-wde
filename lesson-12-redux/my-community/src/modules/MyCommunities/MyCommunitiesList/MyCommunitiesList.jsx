import Button from "../../../shared/components/Button/Button";

import styles from "./MyCommunitiesList.module.css";

const MyCommunitiesList = ({items = [], deleteCommunity})=> {
    const elements = items.map(({id, name, url})=> (
        <li key={id} className={styles.community}>
            <a href={url} target="_blank">{name}</a>
            <div className={styles.leftBlock}>
                <Button onClick={()=> deleteCommunity(id)}>Удалить</Button>
            </div>
        </li>
    ));

    return (
        <ul>{elements}</ul>
    )
}

export default MyCommunitiesList;