import React from 'react';
import styled from '@emotion/styled';
import { Testimonials, Chart, Location } from './components/Index';
type Props = {};
const Container = styled.div`
  padding: 0px 36px;
  background: rgb(255, 255, 255);
  width: 1440px;
  max-width: 100%;
  background: #ffffff;
`;
const Home = (props: Props) => {
  const homeStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <div style={homeStyle}>
      <Container>
        <Testimonials />
        <Chart />
        <Location />
      </Container>
    </div>
  );
};
export { Home };
