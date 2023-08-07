import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";
import Search from "../../components/search/Search";

const MainPage = () => {
  const { movieData } = useContext(MoviesContext);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="text-white container">
      <Search />
      Movies
      <ul className="grid grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <li key={movie.id} className=" ">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-[341px] h-[226px]"
            />
            <div className="flex gap-4 text-gray-400 text-sm">
              {movie.Year}
              {movie.Type === "movie" ? <p>Movie</p> : <p>Series</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
