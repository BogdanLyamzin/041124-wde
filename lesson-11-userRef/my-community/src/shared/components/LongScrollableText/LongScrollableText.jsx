import { useRef } from "react";

import Button from "../Button/Button";

import styles from "./LongScrollableText.module.css";

const LongScrollableText = ({ paragraphs }) => {
  const topRef = useRef(null);
  const endRef = useRef(null);

  const scrollToEnd = () => {
    endRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const elements = paragraphs.map((text, idx) => (
    <p key={idx} className={styles.text}>
      {text}
    </p>
  ));

  return (
    <div className={styles.wrapper}>
      <div ref={topRef}></div>
      <Button onClick={scrollToEnd}>Scroll to end</Button>
      {elements}
      <Button onClick={scrollToTop}>Scroll to top</Button>
      <div ref={endRef}></div>
    </div>
  );
};

export default LongScrollableText;
