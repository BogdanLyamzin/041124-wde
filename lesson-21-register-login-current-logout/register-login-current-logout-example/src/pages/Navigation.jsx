import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import ContactsPage from "./ContactsPage/ContactsPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

import PublicRoute from "../modules/PublicRoute/PublicRoute";
import PrivateRoute from "../modules/PrivateRoute/PrivateRoute";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
