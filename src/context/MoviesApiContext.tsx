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
  const [favoriteList, setFavoriteList] = useState<FavoriteMovies[]>();

  // const favoritesList = useCallback((movie: MovieData) => {
  //   setAllMovies((prevMovies) => {
  //     const isMovieInFavorites = prevMovies.some((m) => m.id === movie.id);

  //     if (isMovieInFavorites) {
  //       return prevMovies.filter((m) => m.id !== movie.id);
  //     } else {
  //       return [...prevMovies, movie];
  //     }
  //   });
  // }, []);
  // const favoritesList = useCallback((movieId: number) => {
  //   const existingItem = allMovies.find((item) => item.id === movieId);
  //   if (existingItem) {
  //     const updatedItems = allMovies.map((item) => {
  //       if (item.id === movieId) {
  //         return { ...item };
  //       }
  //       return item;
  //     });
  //     setAllMovies(updatedItems);
  //   } else {
  //     setAllMovies([...allMovies, { id: movieId }]);
  //   }
  // }, []);

  const favoritesMoviesList = useCallback(
    (movieId: number) => {
      const existingMovie = favoriteList?.find((item) => item.id === movieId);
      if (existingMovie) {
        const updatedMoviesList = favoriteList?.map((item) => {
          if (item.id === movieId) {
            return { ...item };
          }
          return item;
        });
        setFavoriteList(updatedMoviesList);
      } else {
        setFavoriteList([...favoriteList, { id: movieId }]);
      }
    },
    [favoriteList]
  );

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      allMovies,
      favoritesMoviesList,
    }),
    [allMovies, favoritesList]
  );

  return (
    <MoviesContext.Provider value={MoviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesApiContext;
