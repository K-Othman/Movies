// import { useContext } from "react";
// import { MoviesContext } from "../../context/MoviesApiContext";
// import { useParams } from "react-router-dom";

// const SingleMovie = () => {
//   const { allMovies } = useContext(MoviesContext);
//   const { movieId } = useParams<{ movieId: string }>();

//   const parsedMovieId = parseInt(movieId || "");
//   const filteredMovies = allMovies.filter(
//     (movie) => movie.id === parsedMovieId
//   );

//   return (
//     <section className="bg-gray-900 text-white py-16">
//       {filteredMovies.length > 0 ? (
//         <div className="max-w-4xl mx-auto">
//           {filteredMovies.map((movie) => {
//             return (
//               <div
//                 key={movie.id}
//                 className="flex flex-col lg:flex-row items-center"
//               >
//                 <div className="lg:w-1/2">
//                   <img
//                     src={movie.Images[0]} // Display the first image as the main image
//                     alt={movie.Title}
//                     className="w-full h-auto rounded-lg shadow-lg"
//                   />
//                 </div>
//                 <div className="lg:w-1/2 px-4 py-6 lg:py-0">
//                   <h1 className="text-3xl font-semibold mb-4">{movie.Title}</h1>
//                   <p className="text-gray-400 text-sm mb-4">{movie.Genre}</p>
//                   <p className="text-lg">{movie.Plot}</p>
//                   <div className="mt-4">
//                     <span className="text-yellow-500 text-lg font-bold">
//                       {movie.Rate}
//                     </span>
//                     <span className="ml-2 text-gray-400">/10</span>
//                   </div>
//                   <p className="mt-4">Released: {movie.Released}</p>
//                   <p className="mt-4">{movie.Actors}</p>
//                   <p className="mt-4">{movie.Type}</p>
//                   <p className="mt-4">{movie.Year}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="text-center">Sorry, there is no movie to watch here.</p>
//       )}
//     </section>
//   );
// };

// export default SingleMovie;

import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { allMovies } = useContext(MoviesContext);
  const { movieId } = useParams<{ movieId: string }>();

  const parsedMovieId = parseInt(movieId || "");
  const filteredMovies = allMovies.filter(
    (movie) => movie.id === parsedMovieId
  );

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
                  <img
                    src={movie.Images[0]} // Display the first image as the main image
                    alt={movie.Title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2 px-4 py-6 lg:py-0">
                  <h1 className="text-3xl font-semibold mb-4">{movie.Title}</h1>
                  <p className="text-gray-400 text-sm mb-4">{movie.Genre}</p>
                  <p className="text-lg">{movie.Plot}</p>
                  <div className="mt-4">
                    <span className="text-yellow-500 text-lg font-bold">
                      {movie.Rate}
                    </span>
                    <span className="ml-2 text-gray-400">/10</span>
                  </div>
                  <p className="mt-4">Released: {movie.Released}</p>
                  <p className="mt-4">{movie.Actors}</p>
                  <p className="mt-4">{movie.Type}</p>
                  <p className="mt-4">{movie.Year}</p>
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
