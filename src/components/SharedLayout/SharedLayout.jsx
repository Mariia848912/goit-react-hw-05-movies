import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../Loader/Loader';
import { Header, Link, NavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Container>
          <NavList>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </NavList>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
