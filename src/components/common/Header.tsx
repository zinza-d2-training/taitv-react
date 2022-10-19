import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ImgLogoHeader } from '../../access/index';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PeopleIcon from '@mui/icons-material/People';
import { East } from '@mui/icons-material';
type Props = {};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 36px;
  width: 100%;
  height: 50px;
  max-width: 1440px;
`;
const Brand = styled.div`
  & a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 435px;
    height: 50px;
    text-decoration: none;
  }
  & h6 {
    width: 377px;
    height: 32px;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: -0.05px;
    color: #ffffff;
  }
`;
const Logo = styled.div`
  width: 42px;
  height: 50px;
  background: url(${ImgLogoHeader});
  background-size: cover;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 524px;
  height: 50px;
`;
const MenuItem = styled.div`
  position: relative;
  width: ${(props: { width?: number }) =>
    props.width ? `${props.width}px` : `100%`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.04px;
  word-spacing: -1px;
  text-align: center;
  & > a {
    text-align: center;
    display: block;
    line-height: 50px;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.04px;
    word-spacing: -1px;
    width: ${(props: { width?: number }) =>
      props.width ? `${props.width}px` : `100%`};
  }
  & > svg {
    width: 24px;
    height: 24px;
    fill: #ffffff;
    font-size: 16px;
  }
  & > button {
    border: none;
    outline: none;
    margin: 5px 0px;
    width: 100%;
    border-radius: 8px 8px 8px 0px;
    overflow: hidden;
    & > a {
      display: block;
      width: 100%;
      background-color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      letter-spacing: -0.04px;
      text-transform: uppercase;
      color: #303f9f;
      text-decoration: none;
      word-spacing: -1px;
    }
  }
  &:hover ul {
    display: block;
  }
`;
const Dropdown = styled.ul`
  cursor: default;
  display: none;
  position: absolute;
  top: 100%;
  padding: 16px 0px;
  width: 361px;
  height: 180px;
  background: #ffffff;
  box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
`;
const DropdownItem = styled.li`
  cursor: pointer;
  list-style: none;
  & > a {
    display: flex;
    width: 100%;
    padding: 16px 40px;
    align-items: center;
    text-decoration: none;
  }
  & .search__icon-start {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  & .search__title {
    padding-left: 16px;
  }
  & .search__title-main {
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & .search__title-second {
    line-height: 18px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & .search__icon-end {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    & svg {
      width: 24px;
      height: 36px;
    }
  }
  ${(props: { bgcolor: string; fill: string }) => `
    & .search__icon-start {
      background: ${props.bgcolor};
      & svg { 
        fill: ${props.fill}
      }
    }
    & .search__icon-end{
      & svg{
        fill: ${props.fill}
      }
    }

  `}
`;
const Header = (props: Props) => {
  const headerStyle: any = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px 0px',
    width: '100%',
    height: '80px',
    background:
      'linear-gradient(90deg, #ED1B23 0%, #2E3091 52.08%, #253494 100%)'
  };
  return (
    <div style={headerStyle}>
      <Container>
        <Brand>
          <Link to="/">
            <Logo />
            <h6>CỔNG THÔNG TIN TIÊM CHỦNG COVID-19</h6>
          </Link>
        </Brand>

        <Menu>
          <MenuItem width={71}>
            <Link to="/">Trang chủ</Link>
          </MenuItem>
          <MenuItem width={93}>
            <Link to="/">Đăng ký tiêm </Link>
          </MenuItem>
          <MenuItem width={78}>
            Tra cứu
            <KeyboardArrowDownIcon />
            <Dropdown>
              <DropdownItem bgcolor="#EDE7F6" fill="#5E35B1">
                <Link to="/">
                  <span className="search__icon-start">
                    <PeopleIcon />
                  </span>
                  <div className="search__title">
                    <p className="search__title-main">
                      Tra cứu chứng nhận tiêm
                    </p>
                    <p className="search__title-second">
                      Cập nhật nhanh và chính xác nhất
                    </p>
                  </div>
                  <span className="search__icon-end">
                    <East />
                  </span>
                </Link>
              </DropdownItem>
              <DropdownItem bgcolor="#F8F8F8" fill="#1E88E5">
                <Link to="/">
                  <span className="search__icon-start">
                    <PeopleIcon />
                  </span>
                  <div className="search__title">
                    <p className="search__title-main">
                      Tra cứu chứng nhận tiêm
                    </p>
                    <p className="search__title-second">
                      Cập nhật nhanh và chính xác nhất
                    </p>
                  </div>
                  <span className="search__icon-end">
                    <East />
                  </span>
                </Link>
              </DropdownItem>
            </Dropdown>
          </MenuItem>
          <MenuItem width={51}>
            <Link to="/">Tài liệu</Link>
          </MenuItem>
          <MenuItem width={135}>
            <button>
              <Link to="/Login">Đăng nhập</Link>
            </button>
          </MenuItem>
        </Menu>
      </Container>
    </div>
  );
};
export { Header };
