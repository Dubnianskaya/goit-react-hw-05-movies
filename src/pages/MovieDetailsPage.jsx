import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import {getMoviesById} from '../services/moviesApi';
import {MovieCard} from '../components/MovieCard';
import Loader from "../components/Loader";
import toast from 'react-hot-toast';

export const MovieDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();

  useEffect(() => {
      async function fetchMoviesById() {
        setLoading(true);
        try {
          const movie = await getMoviesById(movieId);
          setMovie(movie)
        } catch (error) {
        toast.error('Упс! Что-то пошло не так! Вернитесь на главную страницу');
        } finally {
         setLoading(false)
        }
      }
      fetchMoviesById()
  }, [movieId]);
  
  
    return (
    <div>
    {loading && <Loader />}
   
    {movie && <>
    <NavLink to='/'>Go back</NavLink>
    <MovieCard movie={movie}/>
    </>}
    </div>
    );
  };
  