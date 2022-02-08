import { ListItem, ListLink } from './MovieList.styled'

export const MovieList = ({movies}) => {
  return (
    <div>
      <ol>
        {movies.map(movie => (
        <ListItem key={movie.id}>
        <ListLink to={`/movies/${movie.id}`}>{movie.title}</ListLink>
        </ListItem>
        ))}
      </ol>
    </div>
  );
};