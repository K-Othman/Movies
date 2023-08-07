import { FC, ReactNode, createContext, useMemo } from "react";

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
  // movies: MovieData[];
}

export const MoviesContext = createContext<IMoviesContext>(
  {} as IMoviesContext
);

const MoviesApiContext: FC<Props> = ({ children }) => {
  // const [movies, setMovies] = useState<MovieData[]>(movieData);

  const MoviesContextValue = useMemo(
    () => ({
      movieData,
      // movies,
      // setMovies,
    }),
    []
  );

  return (
    <MoviesContext.Provider value={MoviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesApiContext;
