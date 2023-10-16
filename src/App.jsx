import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <main>
                <p>this is main</p>
                <Home />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/MovieDetails" element={<MovieDetails />}>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
