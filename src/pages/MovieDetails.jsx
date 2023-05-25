import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesDetails } from '../services/movies-api';
import { Loader } from '../components/Loader/Loader';
import { ErrorText } from '../components/ErrorText/ErrorText';
import { formatDate } from '../utils/formatDate';
import { getGenres } from '../utils/getGenres';
import { getScore } from '../utils/getScore';
import { BackLink } from '../components/BackLink/BackLink';
import { PlaceholderImgMovie } from 'components/Placeholder/PlaceholderImgMovie';
import { Container } from 'components/Container/Container';
import {
  AboutMovie,
  Box,
  Img,
  Section,
  BoxMoreInfo,
  StyledLink,
  ListLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();

  const [chooseMovie, setChooseMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesDetails(id);
        if (data.length === 0) return;
        setChooseMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
    return setError(null);
  }, [id]);

  return (
    <Container>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {isLoading && <Loader />}

      {chooseMovie.id && !error && (
        <Section>
          <Box>
            {chooseMovie.poster_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w500${chooseMovie.poster_path}`}
                alt={chooseMovie.title}
                width="300px"
              />
            ) : (
              <PlaceholderImgMovie />
            )}

            <AboutMovie>
              <h2>
                {chooseMovie.title} ({formatDate(chooseMovie.release_date)})
              </h2>
              <p>User Score: {getScore(chooseMovie.vote_average)}%</p>
              <h3>Overview</h3>
              <p>{chooseMovie.overview}</p>
              <h4>Genres</h4>
              <p>{getGenres(chooseMovie.genres)}</p>
            </AboutMovie>
          </Box>
          <BoxMoreInfo>
            <p>Additional information</p>
            <ListLink>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </ListLink>
          </BoxMoreInfo>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>

         
        </Section>
        
      )}
       {error && <ErrorText />}
    </Container>
  );
};

export default MovieDetails;
