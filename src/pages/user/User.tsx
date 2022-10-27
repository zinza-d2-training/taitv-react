import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from './components';
type Props = {};
const Container = styled.div`
  width: 1440px;
  max-width: 100%;
`;
const Main = styled.div`
  width: 100%;
  padding: 48px 36px;
`;
const User = (props: Props) => {
  const userStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <div style={userStyle}>
      <Container>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  );
};
export { User };
