import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Heading, Steps } from './components/Index';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ArrowBack } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';

import {
  SvgStep2Needel,
  SvgStep2Plus,
  SvgStep2Protection
} from '../../access/index';
type Props = {};
const Container = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
const Submit = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const LI = styled.li`
  list-style-type: none;
  margin-left: 30px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.04px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    ${(props: { background: any }) => `
      background: url(${props.background});
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      left: -30px;
      top: 50%;
      transform: translateY(-50%);
    `}
  }
`;
const Clause = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 42px;
  & title,
  & label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & label {
    letter-spacing: 0.15px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  & span {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    & input {
      width: 18px;
      height: 18px;
    }
  }
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
  &.btn-cancel {
    color: #303f9f;
    padding: 0px 13px;
    border: 1px solid #303f9f;
    border-radius: 8px 8px 8px 0px;
    background-color: #fff;
    & svg {
      fill: #303f9f !important;
    }
  }
  &.btn-continute {
    background: #303f9f;
    padding: 0px 30px;
    border-radius: 8px 8px 8px 0px;
    color: #fff;
    & svg {
      fill: #ffffff !important;
    }
  }
`;
interface IFormData {
  isAccept: boolean;
}
const schema = yup
  .object({
    isAccept: yup.bool().required('Vui lòng chấp nhận điều khoản')
  })
  .required();
const Step2 = (props: Props) => {
  const currentStep = useMemo(() => 2, []);
  const [completed, setCompleted] = useState([1]);
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    if (!data.isAccept) {
      alert('Vui lòng chấp nhận điều khoản.');
    } else {
      navigate('../step3');
    }
  };
  const handleCancle = () => {
    navigate('../step1');
  };
  return (
    <>
      <Heading title="Phiếu đồng ý tiêm" />
      <Steps active={currentStep} completed={completed} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <UL>
              <LI background={SvgStep2Protection}>
                1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả,
                tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh
                hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể
                phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên,
                sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện
                pháp phòng chống dịch theo quy định.
              </LI>
              <LI background={SvgStep2Needel}>
                2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu
                hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức
                đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng.
                Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng
                vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng thông
                thường sau tiêm chủng.
              </LI>
              <LI background={SvgStep2Plus}>
                3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm
                chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám
                và điều trị kịp thời.
              </LI>
              <hr style={{ borderColor: '#EEEEEE' }} />
            </UL>
          </Row>
          <Clause>
            <p>
              Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ
              và:
            </p>
            <div>
              <span>
                <input type="checkbox" {...register('isAccept')} />
              </span>
              <label>Đồng ý tiêm chủng</label>
            </div>
          </Clause>
        </Container>
        <Submit>
          <Button className="btn-cancel" onClick={handleCancle}>
            <ArrowBack />
            <span>hủy bỏ</span>
          </Button>
          <Button className="btn-continute">
            <ArrowBack />
            <span>tiếp tục</span>
          </Button>
        </Submit>
      </form>
    </>
  );
};
export { Step2 };
