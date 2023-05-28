import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NotFound = () => {
  const [goMainPage, setGoMainPage] = useState(false);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds === 0) {
      setGoMainPage(true);
    }
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }, [seconds]);

  if (goMainPage) {
    return <Navigate to="/" replase />;
  }
  return (
    <p>
      Page not found. You will be redirected to the main page in {seconds}{' '}
      seconds.
    </p>
  );
};
