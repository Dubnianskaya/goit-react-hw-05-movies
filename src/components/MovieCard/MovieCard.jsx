import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {MovieCardContainer, MovieInfoContainer, AdditionalInformationBox, AdditionalInformationList, AdditionalInformationLink} from './MovieCard.styled'

const MovieCard = ({movie}) => {
    const {id, poster_path, overview, genres, vote_average, title, release_date} = movie;

    let genresName = [];

    function getGenresByName() {
      return genres.map(genre => genresName.push(genre.name));
    }

    getGenresByName();

  return (
    <div>
      <MovieCardContainer>
          <div>
              <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}/>
          </div>
          <MovieInfoContainer>
              <h1>{title} ({release_date?.slice(0, 4)})</h1>
              <p>User Score: {vote_average * 10} %</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
            <p>{genresName.join(', ')}</p>
          </MovieInfoContainer>
      </MovieCardContainer>
          <AdditionalInformationBox>
            <h2>Additional information</h2>
            <AdditionalInformationList>
              <li>
            <AdditionalInformationLink to={`/movies/${id}/cast`}>Cast</AdditionalInformationLink>
            </li>
            <li>
            <AdditionalInformationLink to={`/movies/${id}/reviews`}>Rewiews</AdditionalInformationLink>
            </li>
            </AdditionalInformationList>
            <Suspense fallback="">
            <Outlet />
            </Suspense>
          </AdditionalInformationBox>
      </div>
  );
};

export default MovieCard;