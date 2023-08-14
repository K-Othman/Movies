import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";
import { useParams } from "react-router-dom";

interface SingleMovie {
  movieId: number;
}

const SingleMovie = () => {
  const { allMovies } = useContext(MoviesContext);
  const { movieId } = useParams<SingleMovie>();

  const filteredMovies = allMovies.filter(
    (movie) => movie.id === parseInt(movieId)
  );
  console.log(filteredMovies);

  return (
    <section>
      {filteredMovies.length > 0 && (
        <article>
          {filteredMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <ul>
                  <li>{movie.Title}</li>
                  <li>{movie.Genre}</li>
                  <li>{movie.Rate}</li>

                  <li>
                    {" "}
                    <img src={movie.Poster} alt={movie.Genre} />
                  </li>
                  <li>{movie.Released}</li>
                </ul>
              </div>
            );
          })}
        </article>
      )}
    </section>
  );
};

export default SingleMovie;
