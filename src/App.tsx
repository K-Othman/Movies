import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/movies/movies";
import Series from "./components/series/series";
import Favorites from "./components/favorites/favorites";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex">
        <NavBar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
