// import { useContext } from "react";
// import { MoviesContext } from "../../context/MoviesApiContext";

// const Favorites = () => {
//   const { favoriteMovies, deleteMovies } = useContext(MoviesContext);

//   if (favoriteMovies.length === 0) {
//     return (
//       <p className="text-white font-bold text-center mt-32">
//         You don't have any favourite movies yet!
//       </p>
//     );
//   }

//   return (
//     <div className="text-white">
//       {favoriteMovies.map((m) => (
//         <div key={m.id}>
//           <img src={m.Poster} alt={m.Title} />
//           <p>{m.Title}</p>
//           <button onClick={() => deleteMovies(m.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;

import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesApiContext";

const Favorites = () => {
  const { favoriteMovies, deleteMovies } = useContext(MoviesContext);

  if (favoriteMovies.length === 0) {
    return (
      <p className="text-white font-bold text-center mt-32">
        You don't have any favorite movies yet!
      </p>
    );
  }

  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Favorite Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteMovies.map((m) => (
          <div key={m.id} className="bg-gray-800 rounded-md p-3">
            <img
              src={m.Poster}
              alt={m.Title}
              className="w-full h-40 object-cover mb-2"
            />
            <p className="text-lg font-semibold mb-1">{m.Title}</p>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={() => deleteMovies(m.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
