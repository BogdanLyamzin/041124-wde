import { useState, useEffect, useId, useRef } from "react";

import styles from "./CollapsedItem.module.css";

const CollapsedItem = ({title, text})=> {
    const [open, setOpen] = useState(false);
    const textRef = useRef(null);

    // const [scrollHeight, setScrollHeight] = useState(0);

    // const textId = useId();

    // useEffect(()=> {
    //     const text = document.querySelector(`#${textId}`);
    //     setScrollHeight(text.scrollHeight);
    // }, [setScrollHeight, textId]);

    const toggleOpen = ()=> setOpen(prevOpen => !prevOpen);

    return (
        <div>
            <p onClick={toggleOpen} className={styles.title}>{title}</p>
            <p ref={textRef} style={{height: open ? textRef.current.scrollHeight : 0}} className={styles.text}>{text}</p>
        </div>
    )
}

export default CollapsedItem;