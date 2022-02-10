import { useLocation  } from 'react-router-dom';
import { List, ListItem, ListLink } from './MovieList.styled';
import PropTypes from "prop-types";

const MovieList = ({movies}) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(movie => (
        <ListItem key={movie.id}>
        <ListLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</ListLink>
        </ListItem>
        ))}
      </List>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired, 
    })
  ),
};

export default MovieList;