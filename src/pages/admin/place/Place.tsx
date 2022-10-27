import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FormSearch, Table, DialogEdit } from './components';
type Props = {};
const Container = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(38, 56, 150, 0.14);
`;
const Place = (props: Props) => {
  return (
    <Container>
      <FormSearch />
      <Table />
      <DialogEdit />
    </Container>
  );
};
export { Place };
