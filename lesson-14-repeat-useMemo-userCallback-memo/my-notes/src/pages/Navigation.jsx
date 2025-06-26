import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import ImportantNotesPage from "./ImportantNotesPage/ImportantNotesPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/important" element={<ImportantNotesPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Navigation;