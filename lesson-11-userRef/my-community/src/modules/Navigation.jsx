import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import SongsPage from "../pages/SongsPage/SongsPage";
import SingleSongsPage from "../pages/SingleSongsPage/SingleSongsPage";
import CommunitiesPage from "../pages/CommunitiesPage/CommunitiesPage";
import FriendsPage from "../pages/FriendsPage/FriendsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/songs" element={<SongsPage />} />
      <Route path="/songs/:id" element={<SingleSongsPage />} />
      <Route path="/communities" element={<CommunitiesPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
