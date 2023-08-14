import NavBar from "./components/NavBar/NavBar";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Favorites from "./components/favorites/Favorites";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import SingleMovie from "./pages/singleMovie/SingleMovie";

function App() {
  return (
    <>
      <main className="grid grid-cols-[80px,1fr]">
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:movieId" element={<SingleMovie />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
