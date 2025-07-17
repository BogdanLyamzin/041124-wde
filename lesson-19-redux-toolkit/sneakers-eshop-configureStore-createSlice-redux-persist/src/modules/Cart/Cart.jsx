import {useSelector} from "react-redux";
import Container from "@mui/material/Container";

import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";

import {selectCart} from "../../redux/cart/cart-selectors";

import styles from "./Cart.module.css";

const Cart = ()=> {
    const cart = useSelector(selectCart);

    return (
        <Container>
            <SectionTitle>Корзина</SectionTitle>
            <div className={styles.cart}>
                <CartList items={cart} />
                <CartTotal items={cart} />
            </div>
        </Container>
    )
}

export default Cart;