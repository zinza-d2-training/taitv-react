import React from 'react';
import styled from '@emotion/styled';

import { User, Password } from './components';
type Props = {};

const Container = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Account = (props: Props) => {
  return (
    <Container>
      <User />
      <Password />
    </Container>
  );
};
export { Account };
