import NavBar from "./components/NavBar/NavBar";
import Movies from "./pages/movies/Movies";
import Series from "./components/series/Series";
import Favorites from "./components/favorites/Favorites";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import SingleMovie from "./pages/singleMovie/SingleMovie";

function App() {
  return (
    <>
      <main className="flex">
        {/* <div className="flex"> */}
        <NavBar />
        {/* </div> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/movie" element={<SingleMovie />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
