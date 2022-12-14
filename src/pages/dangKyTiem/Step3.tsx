import { useMemo, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Heading, Steps } from './components/Index';

import { ArrowBack } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux';
import { registrationVaccineSelector } from '../../features/user';

import randomstring from 'randomstring';
type Props = {};
const Container = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.05px;
  color: rgba(0, 0, 0, 0.87);
  & span {
    color: #ef5350;
  }
`;
const TitleSecond = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);

  & a {
    color: #1e88e5;
    text-decoration: none;
  }
`;
const TitleThird = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);

  & span {
    color: #d32f2f;
  }
`;
const Submit = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.04px;
  & svg {
    width: 24px;
    height: 24px;
  }
  &.btn-left {
    color: #303f9f;
    padding: 0px 13px;
    border: 1px solid #303f9f;
    border-radius: 8px 8px 8px 0px;
    background-color: #fff;
    & svg {
      fill: #303f9f !important;
    }
  }
  &.btn-right {
    background: #303f9f;
    padding: 0px 30px;
    border-radius: 8px 8px 8px 0px;
    color: #fff;
    & svg {
      fill: #ffffff !important;
    }
  }
`;
const InforContainer = styled.div`
  width: 100%;
  display: flex;
`;
const InforItem = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  & label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & b {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
`;
const Step3 = (props: Props) => {
  const [idNeedel, setIdNeedel] = useState<number>(0);
  const currentStep = useMemo(() => 3, []);
  const [completed, setCompleted] = useState([1, 2]);
  const navigate = useNavigate();

  const handleCancle = () => {
    navigate('/trang-chu');
  };
  useEffect(() => {
    setIdNeedel(
      Number(
        randomstring.generate({
          length: 12,
          charset: 'numeric'
        })
      )
    );
  }, []);

  const registrationInfo = useAppSelector(registrationVaccineSelector);

  return (
    <>
      <Heading title="Ho??n th??nh" />
      <Steps active={currentStep} completed={completed} />
      <Container>
        <Title>
          ????ng k?? ti??m ch???ng COVID-19 th??nh c??ng. M?? ?????t ti??m c???a b???n l??{' '}
          <span>{idNeedel}</span>.
        </Title>
        <TitleSecond>
          C???m ??n qu?? kh??ch ???? ????ng k?? ti??m ch???ng v???c xin COVID-19. Hi???n t???i B??? y
          t??? ??ang ti???n h??nh thu th???p nhu c???u v?? th??ng tin ????? l???p danh s??ch ?????i
          t?????ng ????ng k?? ti??m v???c xin COVID-19 theo t???ng ?????a b??n. Ch??ng t??i s???
          li??n h??? v???i qu?? kh??ch theo s??? ??i???n tho???i{' '}
          <a href="tel:0123456789">0123456789</a> khi c?? k??? ho???ch ti??m trong
          th???i gian s???m nh???t.
        </TitleSecond>
        <TitleThird>
          M???i b???n t???i ???ng d???ng "S??? S???C KH???E ??I???N T???" t???i{' '}
          <a
            target="_blank"
            href="blank:https://hssk.kcb.vn/#/sskdt"
            rel="noreferrer">
            https://hssk.kcb.vn/#/sskdt
          </a>{' '}
          ????? theo d??i k???t qu??? ????ng k?? ti??m v?? nh???n ch???ng nh???n ti??m ch???ng
          COVID-19
        </TitleThird>
        <InforContainer style={{ paddingTop: '24px' }}>
          <InforItem>
            <label>H??? v?? t??n</label>
            <b>Nguy???n V??n A</b>
          </InforItem>
          <InforItem>
            <label>Ng??y sinh</label>
            <b>16/10/1994</b>
          </InforItem>
          <InforItem>
            <label>Gi???i t??nh</label>
            <b>Nam</b>
          </InforItem>
        </InforContainer>

        <InforContainer>
          <InforItem>
            <label>S??? CMND/CCCD/M?? ?????nh danh c??ng d??n</label>
            <b>024241423</b>
          </InforItem>
          <InforItem>
            <label>S??? th??? BHYT</label>
            <b>{registrationInfo?.healthyCardNumber}</b>
          </InforItem>
          <InforItem>
            <label></label>
            <b></b>
          </InforItem>
        </InforContainer>
        <InforContainer>
          <InforItem>
            <label>T???nh/Th??nh ph???</label>
            <b>Th??nh ph??? H?? N???i </b>
          </InforItem>
          <InforItem>
            <label>Qu???n/Huy???n</label>
            <b>Qu???n Long Bi??n</b>
          </InforItem>
          <InforItem>
            <label>X??/Ph?????ng</label>
            <b>Ph?????ng Giang Bi??n</b>
          </InforItem>
        </InforContainer>
      </Container>
      <Submit>
        <Button className="btn-left" onClick={handleCancle}>
          <ArrowBack />
          <span>trang ch???</span>
        </Button>
        <Button className="btn-right">
          <ArrowBack />
          <span>xu???t th??ng tin</span>
        </Button>
      </Submit>
    </>
  );
};
export { Step3 };
