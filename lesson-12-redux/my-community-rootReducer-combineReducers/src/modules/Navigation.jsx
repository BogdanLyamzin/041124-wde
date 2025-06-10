import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import SongsPage from "../pages/SongsPage/SongsPage";
import SingleSongsPage from "../pages/SingleSongsPage/SingleSongsPage";
import ChannelsPage from "../pages/ChannelsPage/ChannelsPage";
import FavoriteChannelsPage from "../pages/FavoriteChannelsPage/FavoriteChannelsPage";
import FriendsPage from "../pages/FriendsPage/FriendsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/songs" element={<SongsPage />} />
      <Route path="/songs/:id" element={<SingleSongsPage />} />
      <Route path="/channels" element={<ChannelsPage />} />
      <Route path="/favorite-channels" element={<FavoriteChannelsPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Navigation;
