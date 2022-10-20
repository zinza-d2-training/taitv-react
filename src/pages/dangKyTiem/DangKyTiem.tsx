import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
type Props = {};
const Container = styled.div`
  padding: 34px 36px;
  width: 1440px;
  max-width: 100%;
`;
const DangKyTiem = (props: Props) => {
  const dangKyTiemStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };
  return (
    <div style={dangKyTiemStyle}>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
export { DangKyTiem };
