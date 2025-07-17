import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import CompletedPage from "./CompletedPage/CompletedPage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/completed" element={<CompletedPage />} />
    </Routes>
  );
};

export default Navigation;
