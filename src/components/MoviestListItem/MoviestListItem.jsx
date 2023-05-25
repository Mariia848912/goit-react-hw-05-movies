import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item } from './MovieListItem.styled';

export const MoviestListItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </Item>
  );
};

MoviestListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
