import { useContext, useState } from "react";
import { MoviesContext } from "../../context/moviesContext/MoviesApiContext";
// import Search from "../../components/search/Search";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { allMovies, favoriteMovies, favoritesMoviesList } =
    useContext(MoviesContext);

  const [search, setSearch] = useState("");

  if (!allMovies) {
    return <div>Loading...</div>;
  }

  const isMovieInFavorites = (movieId: number) => {
    return favoriteMovies.some((movie) => movie.id === movieId);
  };

  return (
    <section className="text-white container mx-auto">
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Search For Movies Or Series"
          className="mt-5 mb-5 p-5 w-3/4 bg-transparent outline-none "
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <h2 className="md:text-4xl text-xl pl-3 font-thin">
        Recommended for you
      </h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {allMovies
          .filter((movie) => {
            return search.toLowerCase() === ""
              ? movie
              : movie.Title.toLowerCase().includes(search);
          })
          .map((movie) => (
            <li
              key={movie.id}
              className="hover:bg-nav_color  transition duration-300"
            >
              <div className="relative">
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="rounded-t-md w-full h-[200px] md:h-[226px] object-cover"
                  />

                  <div className="flex gap-2 text-gray-400 text-xs sm:text-sm mt-1">
                    <p>{movie.Year}</p>
                    <p>{movie.Type === "movie" ? "Movie" : "Series"}</p>
                  </div>
                  <p className="text-sm">{movie.Title}</p>
                </Link>
                <button
                  className={`absolute top-2 right-2 bg-[rgba(0,0,0,0.5)] rounded-full p-1 ${
                    isMovieInFavorites(movie.id) ? "text-red-500" : ""
                  }`}
                  onClick={() => favoritesMoviesList(movie)}
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

export default MainPage;
