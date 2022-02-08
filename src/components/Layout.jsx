import { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Link to="/page-a">Page A</Link>
        <Link to="/page-b">Page B</Link>
      </Nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      {/* <Toaster /> */}
    </Wrapper>
  );
};