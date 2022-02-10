import { useEffect, useState } from 'react';
import {getPopularMovies} from '../services/moviesApi';
import MovieList from '../components/MovieList';
import Loader from "../components/Loader";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   async function fetchMovies() {
    setLoading(true);
     try {
       const movies = await getPopularMovies();
       setMovies(movies.results)
     } catch (error) {
      console.log(error)
     } finally {
      setLoading(false);
     }
   }
   fetchMovies()
  }, [])

  return (
    <div>
      {loading && <Loader />}
      <MovieList movies={movies}/>
    </div>
  );
};
