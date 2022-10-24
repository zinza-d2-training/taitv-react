import { useMemo, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Heading, Steps } from './components/Index';

import { ArrowBack } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux';
import {
  updateRegistrationVaccine,
  registrationVaccineSelector
} from '../../features/user';

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
      randomstring.generate({
        length: 12,
        charset: 'numeric'
      })
    );
  }, []);

  const registrationInfo = useAppSelector(registrationVaccineSelector);

  return (
    <>
      <Heading title="Hoàn thành" />
      <Steps active={currentStep} completed={completed} />
      <Container>
        <Title>
          Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là{' '}
          <span>{idNeedel}</span>.
        </Title>
        <TitleSecond>
          Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y
          tế đang tiến hành thu thập nhu cầu và thông tin để lập danh sách đối
          tượng đăng ký tiêm vắc xin COVID-19 theo từng địa bàn. Chúng tôi sẽ
          liên hệ với quý khách theo số điện thoại{' '}
          <a href="tel:0123456789">0123456789</a> khi có kế hoạch tiêm trong
          thời gian sớm nhất.
        </TitleSecond>
        <TitleThird>
          Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại{' '}
          <a
            target="_blank"
            href="blank:https://hssk.kcb.vn/#/sskdt"
            rel="noreferrer">
            https://hssk.kcb.vn/#/sskdt
          </a>{' '}
          để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng
          COVID-19
        </TitleThird>
        <InforContainer style={{ paddingTop: '24px' }}>
          <InforItem>
            <label>Họ và tên</label>
            <b>Nguyễn Văn A</b>
          </InforItem>
          <InforItem>
            <label>Ngày sinh</label>
            <b>16/10/1994</b>
          </InforItem>
          <InforItem>
            <label>Giới tính</label>
            <b>Nam</b>
          </InforItem>
        </InforContainer>

        <InforContainer>
          <InforItem>
            <label>Số CMND/CCCD/Mã định danh công dân</label>
            <b>024241423</b>
          </InforItem>
          <InforItem>
            <label>Số thẻ BHYT</label>
            <b>{registrationInfo?.healthyCardNumber}</b>
          </InforItem>
          <InforItem>
            <label></label>
            <b></b>
          </InforItem>
        </InforContainer>
        <InforContainer>
          <InforItem>
            <label>Tỉnh/Thành phố</label>
            <b>Thành phố Hà Nội </b>
          </InforItem>
          <InforItem>
            <label>Quận/Huyện</label>
            <b>Quận Long Biên</b>
          </InforItem>
          <InforItem>
            <label>Xã/Phường</label>
            <b>Phường Giang Biên</b>
          </InforItem>
        </InforContainer>
      </Container>
      <Submit>
        <Button className="btn-left" onClick={handleCancle}>
          <ArrowBack />
          <span>trang chủ</span>
        </Button>
        <Button className="btn-right">
          <ArrowBack />
          <span>xuất thông tin</span>
        </Button>
      </Submit>
    </>
  );
};
export { Step3 };
