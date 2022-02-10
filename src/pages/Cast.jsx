import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {getMovieCast} from '../services/moviesApi';
import {CastList, CastListItem} from '../components/MovieCard/MovieCard.styled';
import ImagePlug from 'components/ImagePlug';

export const Cast = () => {
    const {movieId} = useParams();
    const [casts, setCast] = useState([]);

  useEffect(() => {
   async function fetchCasts() {
     try {
       const casts = await getMovieCast(movieId);
       setCast(casts.cast)
     } catch (error) {
      console.log(error)
     }
   }
   fetchCasts()
  }, [movieId])

  return (
    <div>
       <CastList>
        {casts.map(({id, profile_path, name, character}) => (
        <CastListItem key={id}>
        {profile_path ? <img src={`https://image.tmdb.org/t/p/w154${profile_path}`} alt={name}/> : <ImagePlug/>}
        <h3>{name}</h3>
        <p>{character}</p> 
        </CastListItem>
        ))}
      </CastList>
    </div>
  );
};
