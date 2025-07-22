import {Routes, Route} from "react-router-dom";

import HomePage from "./HomePage/HomePage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default Navigation;