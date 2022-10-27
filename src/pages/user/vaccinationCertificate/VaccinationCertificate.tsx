import React from 'react';
import styled from '@emotion/styled';
import { Certificate, Card } from './components';
type Props = {};
const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;
const VaccinationCertificate = (props: Props) => {
  return (
    <Container>
      <Certificate />
      <Card />
    </Container>
  );
};
export { VaccinationCertificate };
