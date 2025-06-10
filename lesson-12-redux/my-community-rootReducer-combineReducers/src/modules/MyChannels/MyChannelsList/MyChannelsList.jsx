import Button from "../../../shared/components/Button/Button";

import styles from "./MyChannelsList.module.css";

const MyChannelsList = ({items = [], deleteChannel})=> {
    const elements = items.map(({id, name, url})=> (
        <li key={id} className={styles.community}>
            <a href={url} target="_blank">{name}</a>
            <div className={styles.leftBlock}>
                <Button onClick={()=> deleteChannel(id)}>Удалить</Button>
            </div>
        </li>
    ));

    return (
        <ul>{elements}</ul>
    )
}

export default MyChannelsList;