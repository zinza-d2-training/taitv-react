import React from 'react';
import styled from '@emotion/styled';
import { ImgLogoFooterLeft, ImgLogoFooterRight } from '../../access';
type Props = {};
const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 557px;
  height: 137px;
  & p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 20px;
  }
  & b {
  }
  & span {
    color: #d32f2f;
  }
  & img {
    width: 195px;
    height: 89px;
    object-fit: cover;
  }
`;
const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 524px;
  height: 192px;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
  & img {
    width: 220px;
    height: 100px;
    object-fit: cover;
  }
  & .list-app {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a {
      display: inline-block;
      padding: 8px 22px;
      border: 1px solid #ffffff;
      border-radius: 8px 8px 8px 0px;
      text-decoration: none;
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.04px;
    }
  }
`;
const Footer = (props: Props) => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '32px 0px',
    height: '256px',
    background: '#2D2188'
  };
  return (
    <div style={footerStyle}>
      <Container>
        <FooterLeft>
          <p>
            © Bản quyền thuộc{' '}
            <b>TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA</b>
          </p>
          <p>
            {' '}
            Phát triển bởi <span>Viettel</span>
          </p>
          <div>
            <img src={ImgLogoFooterLeft} alt="" />
          </div>
        </FooterLeft>
        <FooterRight>
          <p>
            Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm{' '}
          </p>
          <div className="list-app">
            <a href="/">App tiêm di động (Cho HCM)</a>
            <a href="/">App Store</a>
            <a href="/">Google play</a>
          </div>
          <div>
            <img src={ImgLogoFooterRight} alt="" />
          </div>
        </FooterRight>
      </Container>
    </div>
  );
};
export { Footer };
