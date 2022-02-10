import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import {getGenres} from '../services/moviesApi';
import { HomePage } from 'pages';

const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const MoviesPage = createChunk('MoviesPage');
const MovieDetailsPage = createChunk('MovieDetailsPage');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');

export const App = () => {
  const [genres, setGenres] = useState(null);

 useEffect(() => {
    async function fetchGenres() {
      try {
        const genres = await getGenres();
        setGenres(genres)
      } catch (error) {
      console.log(error)
      } 
    }
    fetchGenres()
}, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage genresArray={genres}/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
