import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/movies-api';
import { ErrorText } from '../ErrorText/ErrorText';
import { Loader } from '../Loader/Loader';
import { NoInformation } from '../NoInformation/NoInformation';
import { Item, List, Name } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getReview(id);
        if (data.length === 0) return;
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
    return setError(null);
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}

      {reviews.length > 0 && !error && (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Name>Author: {author}</Name>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      )}
      {reviews.length === 0 && !error && !isLoading && (
        <NoInformation string="any reviews" />
      )}

      {error && <ErrorText />}
    </div>
  );
};
export default Reviews;
