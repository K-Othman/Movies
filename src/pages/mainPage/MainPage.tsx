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
      <ul className="flex flex-wrap">
        {movieData.map((movie) => (
          <li key={movie.id} className="w-1/3">
            <img src={movie.Poster} alt={movie.Title} className="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
