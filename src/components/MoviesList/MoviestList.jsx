import { MoviestListItem } from '../MoviestListItem/MoviestListItem';
import PropTypes from 'prop-types';
import { ListLink } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ListLink>
      {movies.map(({ id, title }) => (
        <MoviestListItem key={id} id={id} title={title} />
      ))}
    </ListLink>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
