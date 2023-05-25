import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/movies-api';
import { ErrorText } from '../ErrorText/ErrorText';
import { Loader } from '../Loader/Loader';
import { NoInformation } from '../NoInformation/NoInformation';
import { Img, ListLink, Name } from './Cast.styled';
import { PlaceholderCast } from 'components/Placeholder/PlaceholderCast';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await getCast(id);
        if (data.length === 0) return;
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
    return setError(null);
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast.length > 0 && !error && (
        <ListLink>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="100px"
                />
              ) : (
                <PlaceholderCast />
              )}
              <Name>{name}</Name>
              <p>Character: {character}</p>
            </li>
          ))}
        </ListLink>
      )}
      {cast.length === 0 && !error && !isLoading && (
        <NoInformation string="actors" />
      )}
      {error && <ErrorText />}
    </div>
  );
};

export default Cast;
