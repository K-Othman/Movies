import { useContext } from "react";
import { MoviesContext } from "../../context/moviesContext/MoviesApiContext";
import { Link } from "react-router-dom";
// import Search from "../../components/search/Search";

const MoviesComponent = () => {
  const { allMovies, favoritesList } = useContext(MoviesContext);

  const moviesOnly = allMovies.filter((movie) => movie.Type === "movie");

  return (
    <section className="text-white container mx-auto">
      {/* <Search /> */}
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {moviesOnly.map((movie) => (
          <li key={movie.id}>
            <div className="relative">
              <Link to="/movies/movie">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-[200px] md:h-[226px] rounded-xl"
                />
                <div className="flex gap-2 text-gray-400 text-xs sm:text-sm mt-1">
                  <p>{movie.Year}</p>
                  <p>{movie.Type === "movie" ? "Movie" : "Series"}</p>
                </div>
                <p className="text-sm">{movie.Title}</p>
              </Link>
              <button
                className="absolute top-2 right-2 hover:text-white bg-[rgba(0,0,0,0.5)] rounded-full p-1"
                onClick={() => favoritesList(movie)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesComponent;
