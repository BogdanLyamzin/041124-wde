import { Heading, Divider } from "rsuite";

import styles from "./CartTotal.module.css";

const CartTotal = ({ items = [] }) => {
  const elements = items.map(({ id, name }) => (
    <li key={id} className={styles.item}>
      {name}
    </li>
  ));

  const totalPrice = items.reduce((acum, {price, count})=> acum + price * count, 0);

  return (
    <div className={styles.container}>
      <Heading className={styles.title}>Итого</Heading>
      <ul className={styles.list}>{elements}</ul>
      <Divider />
      <p>ЦЕНА:</p>
      <p>{totalPrice}</p>
    </div>
  );
};

export default CartTotal;
