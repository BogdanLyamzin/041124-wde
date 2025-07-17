import {useDispatch} from "react-redux";

import {deleteFromCart} from "../../../redux/cart/cart-slice";

import styles from "./CartList.module.css";

const CartList = ({items = []})=> {
    const dispatch = useDispatch();

    const onDeleteFromCart = id => {
        dispatch(deleteFromCart(id));
    }

    const elements = items.map(({id, name, price, count})=> (
        <li key={id} className={styles.item}>
            <p>{name}</p>
            <div className={styles.bottom}>
                <p>Цена: {price * count}</p>
                <button onClick={()=> onDeleteFromCart(id)}>Delete</button>
            </div>
        </li>
    ));

    return <ul className={styles.list}>{elements}</ul>
}

export default CartList;