import { useLocation  } from 'react-router-dom';
import { List, ListItem, ListLink } from './MovieList.styled'

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

export default MovieList;