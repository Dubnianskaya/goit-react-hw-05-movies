import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {getMovieReviews} from '../services/moviesApi';

export const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
   async function fetchReviews() {
     try {
       const reviews = await getMovieReviews(movieId);
       setReviews(reviews.results)
     } catch (error) {
      console.log(error)
     }
   }
   fetchReviews()
  }, [movieId])

  return (
    <div>
        {(reviews.length !== 0) ?  
        (<ul>
        {reviews.map(({id, author, content}) => (
        <li key={id}>
        <h2>Author: {author}</h2>
        <p>{content}</p> 
        </li>
        ))}
      </ul>)
      : (<p>We don't have any reviews yet</p>
      )}
     
    </div>
  );
};
