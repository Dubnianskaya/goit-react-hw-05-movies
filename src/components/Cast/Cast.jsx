import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {getMovieCast} from '../../services/moviesApi';

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
       <ul>
        {casts.map(({id, profile_path, name, character}) => (
        <li key={id}>
        {profile_path && <img src={`https://image.tmdb.org/t/p/w154${profile_path}`} alt={name}/>}
        <h2>{name}</h2>
        <p>{character}</p> 
        </li>
        ))}
      </ul>
    </div>
  );
};