import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";

const Favorites = () => {
  const { favoriteMovies, deleteMovies } = useContext(MoviesContext);

  return (
    <div className="text-white">
      {favoriteMovies.map((m) => (
        <div key={m.id}>
          <img src={m.Poster} alt={m.Title} />
          <p>{m.Title}</p>
          <button onClick={() => deleteMovies(m.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
