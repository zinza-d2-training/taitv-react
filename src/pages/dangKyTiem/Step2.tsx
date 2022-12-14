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

import { IFRegistrationVaccine } from '../../interfaces/user';

import { useAppDispatch, useAppSelector } from '../../redux';
import {
  toggleIsAccept,
  registrationVaccineSelector
} from '../../features/user';
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
const schema = yup
  .object({
    isAccept: yup.bool().required('Vui l??ng ch???p nh???n ??i???u kho???n')
  })
  .required();
const Step2 = (props: Props) => {
  let isAccept = useAppSelector(registrationVaccineSelector).isAccept;
  const currentStep = useMemo(() => 2, []);
  const [completed, setCompleted] = useState([1]);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Partial<IFRegistrationVaccine>>({
    resolver: yupResolver(schema),
    defaultValues: {
      isAccept
    }
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: Partial<IFRegistrationVaccine>) => {
    if (isAccept) {
      navigate('../step3');
    } else {
      alert('Vui l??ng ch???n ?????ng ??');
    }
  };
  const handleCancle = () => {
    navigate('../step1');
  };
  const handleChange = () => {
    dispatch(toggleIsAccept());
  };
  return (
    <>
      <Heading title="Phi???u ?????ng ?? ti??m" />
      <Steps active={currentStep} completed={completed} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <UL>
              <LI background={SvgStep2Protection}>
                1. Ti??m ch???ng v???c xin l?? bi???n ph??p ph??ng ch???ng d???ch hi???u qu???,
                tuy nhi??n v???c xin ph??ng COVID-19 c?? th??? kh??ng ph??ng ???????c b???nh
                ho??n to??n. Ng?????i ???????c ti??m ch???ng v???c xin ph??ng COVID-19 c?? th???
                ph??ng ???????c b???nh ho???c gi???m m???c ????? n???ng n???u m???c b???nh. Tuy nhi??n,
                sau khi ti??m ch???ng v???n ph???i ti???p t???c th???c hi???n nghi??m c??c bi???n
                ph??p ph??ng ch???ng d???ch theo quy ?????nh.
              </LI>
              <LI background={SvgStep2Needel}>
                2. Ti??m ch???ng v???c xin ph??ng COVID-19 c?? th??? g??y ra m???t s??? bi???u
                hi???n t???i ch??? ti??m ho???c to??n th??n nh?? s??ng, ??au ch??? ti??m, nh???c
                ?????u, bu???n n??n, s???t, ??au c?????ho???c tai bi???n n???ng sau ti??m ch???ng.
                Ti??m v???c xin m??i 2 do Pfizer s???n xu???t ??? ng?????i ???? ti??m m??i 1 b???ng
                v???c xin AstraZeneca c?? th??? t??ng kh??? n??ng x???y ra ph???n ???ng th??ng
                th?????ng sau ti??m ch???ng.
              </LI>
              <LI background={SvgStep2Plus}>
                3. Khi c?? tri???u ch???ng b???t th?????ng v??? s???c kh???e, ng?????i ???????c ti??m
                ch???ng c???n ?????n ngay c?? s??? y t??? g???n nh???t ????? ???????c t?? v???n, th??m kh??m
                v?? ??i???u tr??? k???p th???i.
              </LI>
              <hr style={{ borderColor: '#EEEEEE' }} />
            </UL>
          </Row>
          <Clause>
            <p>
              Sau khi ???? ?????c c??c th??ng tin n??u tr??n, t??i ???? hi???u v??? c??c nguy c??
              v??:
            </p>
            <div>
              <span>
                <input
                  type="checkbox"
                  {...register('isAccept')}
                  onChange={handleChange}
                />
              </span>
              <label>?????ng ?? ti??m ch???ng</label>
            </div>
          </Clause>
        </Container>
        <Submit>
          <Button className="btn-cancel" onClick={handleCancle}>
            <ArrowBack />
            <span>h???y b???</span>
          </Button>
          <Button className="btn-continute">
            <ArrowBack />
            <span>ti???p t???c</span>
          </Button>
        </Submit>
      </form>
    </>
  );
};
export { Step2 };
