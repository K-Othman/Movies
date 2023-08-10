import { FC, ReactNode, createContext, useMemo, useState } from "react";

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

export interface IMoviesContext {
  movieData: MovieData[];
  allMovies: MovieData[];
}

export const MoviesContext = createContext<IMoviesContext>(
  {} as IMoviesContext
);

const MoviesApiContext: FC<Props> = ({ children }) => {
  const [allMovies, setAllMovies] = useState<MovieData[]>(movieData);

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      allMovies,
      setAllMovies,
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
