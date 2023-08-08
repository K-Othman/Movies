import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";
import Search from "../../components/search/Search";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { movieData } = useContext(MoviesContext);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="text-white container">
      <Search />
      Recommended for you
      <ul className="grid grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <li key={movie.id} className=" ">
            <Link to="/movies/movie">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-[341px] h-[226px] rounded-xl"
              />
              <div className="flex gap-4 text-gray-400 text-sm mt-4">
                <p> {movie.Year}</p>
                {movie.Type === "movie" ? <p>Movie</p> : <p>Series</p>}
              </div>
              <p>{movie.Title} </p>
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
