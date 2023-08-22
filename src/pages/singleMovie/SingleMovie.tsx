import { useContext, useState } from "react";
import { MoviesContext } from "../../context/moviesContext/MoviesApiContext";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { allMovies } = useContext(MoviesContext);
  const { movieId } = useParams<{ movieId: string }>();

  const parsedMovieId = parseInt(movieId || "");
  const filteredMovies = allMovies.filter(
    (movie) => movie.id === parsedMovieId
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % filteredMovies[0].Images.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + filteredMovies[0].Images.length) %
        filteredMovies[0].Images.length
    );
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      {filteredMovies.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {filteredMovies.map((movie) => {
            return (
              <div
                key={movie.id}
                className="flex flex-col lg:flex-row items-center"
              >
                <div className="lg:w-1/2">
                  <div className="relative">
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 rounded-full p-2 cursor-pointer"
                    >
                      &lt;
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 rounded-full p-2 cursor-pointer"
                    >
                      &gt;
                    </button>
                    <img
                      src={movie.Images[currentSlide]}
                      alt={movie.Title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 px-4 py-6 lg:py-0">
                  <h1 className="text-3xl font-semibold mb-4">{movie.Title}</h1>
                  <p className="text-gray-400 text-sm mb-4">
                    {movie.Genre} - {movie.Type.toUpperCase()}
                  </p>

                  <p className="text-lg">{movie.Plot}</p>
                  <div className="mt-4">
                    <span className="text-yellow-500 text-lg font-bold">
                      {movie.Rate}
                    </span>
                    <span className="ml-2 text-gray-400">/10</span>
                  </div>
                  <p className="mt-4">Released: {movie.Released}</p>
                  <p className="mt-4">{movie.Actors}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center">Sorry, there is no movie to watch here.</p>
      )}
    </section>
  );
};

export default SingleMovie;
