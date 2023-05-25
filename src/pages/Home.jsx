import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/movies-api';
import { MoviesList } from '../components/MoviesList/MoviestList';
import { ErrorText } from '../components/ErrorText/ErrorText';
import { Loader } from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import { NOTIFICATION } from '../constants/notification';
import { Container } from "../components/Container/Container";
// list-style-position: inside;
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      fetchMovies();
       return setError(null);
  }, []);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
        const data = await getTrendingMovies();
         if (data.length === 0) {
          return toast.error(NOTIFICATION.noInfoInTheWebsite);
        }
      setTrendingMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      {trendingMovies.length > 0 && !error && <MoviesList movies={trendingMovies} />}
      {error && <ErrorText />}
    </Container>
  );
};

export default Home;

