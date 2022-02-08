import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Toaster } from 'react-hot-toast';
import {LayoutHeader, Container, Link} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <LayoutHeader>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      </LayoutHeader>
      <Container>
      <Suspense fallback="">
        <Outlet />
        < Toaster />
      </Suspense>
      </Container>
      </>
  );
};
