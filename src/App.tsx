import NavBar from "./components/NavBar/NavBar";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Favorites from "./pages/favorites/Favorites";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import SingleMovie from "./pages/singleMovie/SingleMovie";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <>
      <main className="grid grid-cols-[80px,1fr]">
        <AuthContextProvider>
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
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </main>
    </>
  );
}

export default App;
