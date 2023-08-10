import {
  FC,
  ReactNode,
  createContext,
  // useCallback,
  useMemo,
  useState,
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
  Images: string[];
}

export interface IMoviesContext {
  movieData: MovieData[];
  allMovies: MovieData[];
  // filteredMovies: () => void;
}

export const MoviesContext = createContext<IMoviesContext>(
  {} as IMoviesContext
);

const MoviesApiContext: FC<Props> = ({ children }) => {
  const [allMovies, setAllMovies] = useState<MovieData[]>(movieData);

  // const filteredMovies = useCallback(() => {
  //   const movies = setAllMovies(
  //     [...allMovies].filter((movie) => movie.Type === "movie")
  //   );
  //   console.log(movies);
  // }, [allMovies]);

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      allMovies,
      setAllMovies,
      // filteredMovies,
    }),
    [allMovies]
  );

  return (
    <MoviesContext.Provider value={MoviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesApiContext;
