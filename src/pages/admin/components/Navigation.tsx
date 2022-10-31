import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
type Props = {};
const Container = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 36px;
  gap: 16px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
`;
const Item = styled.li`
  height: 100%;

  & a {
    display: block;
    height: 100%;
    line-height: 24px;
    padding: 20px 8px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.04px;
    color: #6e6d7a;
    text-decoration: none;
    cursor: pointer;
  }
  & .active {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
    color: rgba(0, 0, 0, 0.87);
    cursor: default;
  }
`;
const Navigation = (props: Props) => {
  return (
    <Container>
      <Item>
        <NavLink
          to="place"
          className={({ isActive }) => (isActive ? 'active' : '')}>
          Điểm tiêm
        </NavLink>
      </Item>
      <Item>
        <NavLink
          to="register"
          className={({ isActive }) => (isActive ? 'active' : '')}>
          Đăng ký
        </NavLink>
      </Item>
      <Item>
        <NavLink
          to="document"
          className={({ isActive }) => (isActive ? 'active' : '')}>
          Tài liệu
        </NavLink>
      </Item>
    </Container>
  );
};
export { Navigation };
