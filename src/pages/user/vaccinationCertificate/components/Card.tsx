import React from 'react';
import styled from '@emotion/styled';
import {
  ImgLogoCardVaccineCertificate,
  ImgQRCardVaccineCertificate
} from '../../../../access';

import {
  Person as PersonIcon,
  DateRange as DateRangeIcon,
  FeaturedVideo as FeaturedVideoIcon
} from '@mui/icons-material';
type Props = {};

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 340px;
  height: 668px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
  border-radius: 8px 8px 8px 0px;
  ${(props: { bgColor: string }) =>
    props.bgColor === 'green'
      ? `
      background: #43A047;
    `
      : `background: #FFE082;`}
`;
const Logo = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-image: url(${(props: { background: any }) => props.background});
`;
const Heading = styled.div`
  width: 100%;
  line-height: 32px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  text-transform: uppercase;
`;
const QR = styled.div`
  display: block;
  width: 196px;
  height: 196px;
  object-fit: cover;
  background-image: url(${(props: { background: any }) => props.background});
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 292px;
  height: 220px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
`;
const CardInfoItem = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  gap: 8px;
`;
const CardInfoRight = styled.div`
  flex-grow: 1;
  & p,
  & b {
    line-height: 24px;
    font-size: 16px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & b {
    font-weight: 500;
    margin-top: 4px;
  }
`;
const CardInfoLeft = styled.div`
  width: 24px;
  & svg {
    width: 24px;
    height: 24px;
    fill: black;
  }
`;

const Card = (props: Props) => {
  return (
    <Container bgColor="green">
      <Logo background={ImgLogoCardVaccineCertificate}></Logo>
      <Heading>đã tiêm 2 mũi vaccine</Heading>
      <QR background={ImgQRCardVaccineCertificate}></QR>
      <CardInfo>
        <CardInfoItem>
          <CardInfoLeft>
            <PersonIcon />
          </CardInfoLeft>
          <CardInfoRight>
            <p>Họ và tên</p>
            <b>Nguyễn Văn A</b>
          </CardInfoRight>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoLeft>
            <DateRangeIcon />
          </CardInfoLeft>
          <CardInfoRight>
            <p>Ngày sinh</p>
            <b>16/10/1994</b>
          </CardInfoRight>
        </CardInfoItem>
        <CardInfoItem>
          <CardInfoLeft>
            <FeaturedVideoIcon />
          </CardInfoLeft>
          <CardInfoRight>
            <p>Số CMND/CCCD</p>
            <b>030012345678</b>
          </CardInfoRight>
        </CardInfoItem>
      </CardInfo>
    </Container>
  );
};
export { Card };
