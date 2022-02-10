import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../services/moviesApi';
import MovieList from '../components/MovieList';
import SearchForm from '../components/Form'
import Loader from "../components/Loader";
import toast from 'react-hot-toast';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      async function fetchMoviesByQuery() {
        setLoading(true);
        try {
          const movies = await getMoviesByQuery(query);
          if (movies.results.length === 0) {
            toast.error('Нет фильма по такому запросу! Введите название фильма.');
            return;
          }
          setMovies(movies.results)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
      }
      fetchMoviesByQuery()
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const queryString = e.currentTarget.elements.query.value;
    if (queryString === "") {
      toast.error('Введите название фильма!');
      return;
    }
    setSearchParams({ query: queryString.trim() });
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit}/>
      {loading && <Loader />}
      {(query && !loading) && <MovieList movies={movies}/>}
    </div>
  );
};
