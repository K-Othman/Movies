import {
  FC,
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import movieData from "../data/film.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
  deleteMovies: (id: number) => void;
}

export const MoviesContext = createContext<IMoviesContext>(
  {} as IMoviesContext
);

const MoviesApiContext: FC<Props> = ({ children }) => {
  const [allMovies, setAllMovies] = useState<MovieData[]>(movieData);
  const [favoriteList, setFavoriteList] = useLocalStorage<FavoriteMovies[]>(
    "favourite-movies",
    []
  );

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
    [favoriteList, setFavoriteList]
  );

  const deleteMovies = useCallback(
    (movieId: number) => {
      setFavoriteList((prevFavoriteList) => {
        return prevFavoriteList.filter((movie) => movie.id !== movieId);
      });
    },
    [setFavoriteList]
  );

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      setAllMovies,
      allMovies,
      favoritesMoviesList,
      favoriteMovies: favoriteList,
      deleteMovies,
    }),
    [allMovies, favoriteList, favoritesMoviesList, deleteMovies]
  );

  return (
    <MoviesContext.Provider value={MoviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesApiContext;
