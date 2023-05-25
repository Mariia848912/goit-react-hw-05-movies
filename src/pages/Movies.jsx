import { SearchBox } from '../components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../services/movies-api';
import { ErrorText } from '../components/ErrorText/ErrorText';
import { MoviesList } from '../components/MoviesList/MoviestList';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import { NOTIFICATION } from '../constants/notification';
import { Container } from 'components/Container/Container';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchMovie === '') return;
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies(searchMovie);
        if (data.length === 0) {
          return toast.error(NOTIFICATION.noInfoInTheWebsite);
        }
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();

    return setError(null);
  }, [searchMovie]);

  const handleFormSubmit = movie => {
    setSearchParams({ query: movie });
    setMovies([]);
  };
  return (
    <Container>
      <SearchBox onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {movies.length > 0 && !error && <MoviesList movies={movies} />}
      {error && <ErrorText />}
    </Container>
  );
};

export default Movies;
