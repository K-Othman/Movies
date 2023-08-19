// import { FC, ReactNode, createContext, useMemo, useState } from "react";

// import movieData from "../data/film.json";

// type Props = {
//   children: ReactNode;
// };

// export interface MovieData {
//   id: number;
//   Title: string;
//   Year: string;
//   Released: string;
//   Genre: string;
//   Actors: string;
//   Plot: string;
//   Poster: string;
//   Type: string;
//   Rate: number;
//   Images: string[];
// }

// export interface IMoviesContext {
//   movieData: MovieData[];
//   allMovies: MovieData[];
//   favoritesList: (item: MovieData) => void;
// }

// export const MoviesContext = createContext<IMoviesContext>(
//   {} as IMoviesContext
// );

// const MoviesApiContext: FC<Props> = ({ children }) => {
//   const [allMovies, setAllMovies] = useState<MovieData[]>(movieData);

//   const manageFavorites = (movieId, favoriteList, setFavoriteList) => {
//     const isMovieInFavorites = favoriteList.some(
//       (movie) => movie.id === movieId
//     );

//     if (isMovieInFavorites) {
//       const updatedFavorites = favoriteList.filter(
//         (movie) => movie.id !== movieId
//       );
//       setFavoriteList(updatedFavorites);
//     } else {
//       const movieToAdd = { id: movieId };
//       setFavoriteList([...favoriteList, movieToAdd]);
//     }
//   };

//   // const addProductToCart = (productId: number) => {
//   //   const existingItem = cartItems.find((item) => item.id === productId);
//   //   if (existingItem) {
//   //     const updatedItems = cartItems.map((item) => {
//   //       if (item.id === productId) {
//   //         return { ...item, quantity: item.quantity + 1 };
//   //       }
//   //       return item;
//   //     });
//   //     setCartItems(updatedItems);
//   //   } else {
//   //     setCartItems([...cartItems, { id: productId, quantity: 1 }]);
//   //   }
//   // };

//   const MoviesContextValue = useMemo(
//     () => ({
//       movieData,
//       allMovies,
//       setAllMovies,
//       favoritesList,
//     }),
//     [allMovies]
//   );

//   return (
//     <MoviesContext.Provider value={MoviesContextValue}>
//       {children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesApiContext;

import {
  FC,
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import movieData from "../data/film.json";

type Props = {
  children: ReactNode;
};

export interface MovieData {
  id: number;
  Title: string;
  Year: string;
  Released: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Type: string;
  Rate: number;
  Images: string[];
}

type FavoriteMovies = {
  id: number;
  Title: string;
  Poster: string;
};

export interface IMoviesContext {
  movieData: MovieData[];
  allMovies: MovieData[];
  favoritesMoviesList: (movie: MovieData) => void;
  favoriteMovies: FavoriteMovies[];
}

export const MoviesContext = createContext<IMoviesContext>(
  {} as IMoviesContext
);

const MoviesApiContext: FC<Props> = ({ children }) => {
  const [allMovies, setAllMovies] = useState<MovieData[]>(movieData);
  const [favoriteList, setFavoriteList] = useState<FavoriteMovies[]>([]);

  const favoritesMoviesList = useCallback(
    (movie: MovieData) => {
      if (favoriteList) {
        const existingMovie = favoriteList.find((item) => item.id === movie.id);
        if (existingMovie) {
          const updatedMoviesList = favoriteList.filter(
            (item) => item.id !== movie.id
          );
          setFavoriteList(updatedMoviesList);
        } else {
          setFavoriteList([
            ...favoriteList,
            { id: movie.id, Title: movie.Title, Poster: movie.Poster },
          ]);
        }
      } else {
        setFavoriteList([
          { id: movie.id, Title: movie.Title, Poster: movie.Poster },
        ]);
      }
    },
    [favoriteList]
  );
  console.log(favoriteList);

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      setAllMovies,
      allMovies,
      favoritesMoviesList,
      favoriteMovies: favoriteList,
    }),
    [allMovies, favoriteList, favoritesMoviesList]
  );

  return (
    <MoviesContext.Provider value={MoviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesApiContext;
