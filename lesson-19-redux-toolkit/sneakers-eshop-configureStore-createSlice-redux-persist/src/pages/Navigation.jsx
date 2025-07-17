import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CartPage from "./CartPage/CartPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Navigation;