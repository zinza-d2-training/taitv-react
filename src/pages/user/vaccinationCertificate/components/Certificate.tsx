import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
type Props = {};
const Container = styled.div`
  flex-grow: 1;
  height: 668px;
  padding: 0px 8px;
`;
const Slogan = styled.div`
  width: 100%;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
`;
const SubSologan = styled.div`
  line-height: 24px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
`;
const Heading = styled.div`
  margin-top: 24px;
  width: 100%;
  line-height: 32px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
const Row = styled.div`
  margin-top: ${(props: { mt: number }) => `${props.mt}px`};
  width: 100%;
  display: flex;
`;
const Col = styled.div`
  flex-grow: 1;
  & > p,
  & > b {
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & > b {
    font-weight: 500;
  }
  & > div > a {
    display: inline-block;
    padding: 6px 16px;
    background: #303f9f;
    border-radius: 8px 8px 8px 0px;
    text-decoration: none;

    line-height: 24px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
const Table = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
`;
const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0px;
  ${(props: { isHead?: boolean }) =>
    props?.isHead
      ? `
    height: 50px;
    background: rgba(238, 238, 238, 0.4);
    line-height: 24px;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 2px solid #eeeeee;
  `
      : `
    height: 44px;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
  `};
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    text-align: center;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 0px;
      background: #e8eaf6;
      border: 1px solid #3f51b5;
      border-radius: 30px;
      width: 100%;
    }
  }
  & > div:not(:first-child) {
    flex-grow: 1;
    width: calc((100% - 80px) / 4);
  }
  & > div:first-child {
    width: 80px;
  }
`;
const Certificate = (props: Props) => {
  return (
    <Container>
      <Slogan>C???NG H??A X?? H???I CH??? NGH??A VI???T NAM</Slogan>
      <SubSologan>?????c l???p - T??? do - H???nh ph??c</SubSologan>
      <Heading>CH???NG NH???N TI??M CH???NG COVID-19</Heading>
      <Row mt={24}>
        <Col>
          <p>H??? v?? t??n</p>
          <b>Nguy???n V??n A</b>
        </Col>
        <Col>
          <p>Ng??y sinh</p>
          <b>16/10/1994</b>
        </Col>
        <Col>
          <p>S??? CMND/CCCD</p>
          <b>030012345678</b>
        </Col>
        <Col>
          <p>S??? th??? BHYT</p>
          <b>030094005102</b>
        </Col>
      </Row>
      <Row mt={16}>
        <Col>
          <p>?????a ch???</p>
          <b>Ph?????ng Giang Bi??n - Qu???n Long Bi??n - Th??nh ph??? H?? N???i</b>
        </Col>
      </Row>
      <Row mt={16}>
        <Col>
          <p>K???t lu???n</p>
          <b>???? ???????c ti??m ph??ng v???c xin ph??ng b???nh Covid-19</b>
        </Col>
      </Row>
      <Row mt={16}>
        <Table>
          <TableRow isHead>
            <div>M??i s???</div>
            <div>Th???i gian ti??m</div>
            <div>T??n v???c xin</div>
            <div> S??? l??</div>
            <div>N??i ti??m</div>
          </TableRow>
          <TableRow>
            <div>1</div>
            <div>08/09/2021 - 16:56</div>
            <div>COVID-19 Vaccine AstraZeneca</div>
            <div>NJ0342</div>
            <div>TYT D???ch V???ng H???u</div>
          </TableRow>
          <TableRow>
            <div>1</div>
            <div>08/09/2021 - 16:56</div>
            <div>COVID-19 Vaccine AstraZeneca</div>
            <div>NJ0342</div>
            <div>TYT D???ch V???ng H???u</div>
          </TableRow>
        </Table>
      </Row>
      <Row mt={16}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/dang-ky-tiem/step1">????ng k?? m??i ti??m ti???p theo</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export { Certificate };
