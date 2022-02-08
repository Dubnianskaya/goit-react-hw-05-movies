import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const MovieCard = ({movie}) => {
    const {id, poster_path, overview, genre_ids, vote_average, title, release_date} = movie;
  
  return (
    <div>
          <div>
              <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}/>
          </div>
          <div>
              <h1>{title} ({release_date?.slice(0, 4)})</h1>
              <p>User Score: {vote_average * 10} %</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
            <p>{genre_ids}</p>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
            <NavLink to={`/movies/${id}/reviews`}>Rewiews</NavLink>
            </ul>
            <Suspense fallback="">
            <Outlet />
            </Suspense>
          </div>
      </div>
  );
};