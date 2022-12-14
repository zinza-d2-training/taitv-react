import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Heading, Steps } from './components/Index';

import { Select, MenuItem, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ArrowBack } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';
import { IFRegistrationVaccine } from '../../interfaces/user';
import { priorities, expectDateTimes } from '../../fake/steps';

import { useAppDispatch, useAppSelector } from '../../redux';
import {
  updateRegistrationVaccine,
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
const FormHeading = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  ${(props: { highLight?: boolean }) =>
    !!props?.highLight ? `color: #D32F2F` : 'color: rgba(0, 0, 0, 0.87)'};
  width: 100%;
  letter-spacing: -0.04px;
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
  & .note-list {
    list-style-position: inside;
    color: #d32f2f;
    & li {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.04px;
      font-weight: 400;
    }
  }
`;
const InputComponent = styled.div`
  ${(props: { fullWidth?: boolean }) =>
    !!props?.fullWidth ? `width: 100%` : 'width: 330px'};
  & label {
    display: block;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.87);
    & span {
      color: #d32f2f;
    }
  }
  /* & .MuiInputBase-input {
    width: 320px;
    height: 40px;
  } */
  & .MuiInputBase-root {
    width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }
  & .MuiInputBase-input,
  & .MuiSelect-select {
    padding: 0px !important;
    height: 40px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    align-items: center;
  }
  & .input-expectday {
    border-radius: 4px;
    padding: 0px;
    border: 1px solid #c4c4c4;
    width: 320px;
    padding-left: 8px;
    padding-right: 8px;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.87);
  }
  & .MuiOutlinedInput-notchedOutline {
    border-radius: 4px;
    padding: 0px;
    border: 1px solid #c4c4c4;
  }
  & .MuiSvgIcon-root {
    font-size: 25px;
  }
  & .input-helper {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #d32f2f;
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
    priorityId: yup.number().required('Nh??m ??u ti??n kh??ng ???????c b??? tr???ng'),
    healthyCardNumber: yup
      .string()
      .required('S??? th??? BHYT kh??ng ???????c b??? tr???ng')
      .matches(/^[0-9]+$/, 'S??? th??? BHYT l?? s???'),
    job: yup.string().required('Ngh??? nghi???p kh??ng ???????c b??? tr???ng'),
    workingUnit: yup.string().required('????n v??? c??ng t??c kh??ng ???????c b??? tr???ng'),
    currentAddress: yup
      .string()
      .required('?????a ch??? hi???n t???i kh??ng ???????c b??? tr???ng'),
    expectDay: yup.date().required('Ng??y mong mu???n kh??ng ???????c b??? tr???ng'),
    expectDateTimeId: yup
      .number()
      .required('Bu???i ti??m mong mu???n kh??ng ???????c b??? tr???ng')
  })
  .required();
const Step1 = (props: Props) => {
  const registrationVaccineInfo = useAppSelector(registrationVaccineSelector);
  const currentStep = useMemo(() => 1, []);
  const [completed, setCompleted] = useState([]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Partial<IFRegistrationVaccine>>({
    resolver: yupResolver(schema),
    defaultValues: registrationVaccineInfo
  });
  const onSubmit = (data: Partial<IFRegistrationVaccine>) => {
    dispatch(updateRegistrationVaccine(data));
    navigate('../step2');
  };
  const handleCancle = () => {
    navigate('/');
  };
  return (
    <>
      <Heading title="Th??ng tin c?? nh??n" />
      <Steps active={currentStep} completed={completed} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <FormHeading>1. Th??ng tin ng?????i ????ng k?? ti??m</FormHeading>
          <Row>
            <InputComponent>
              <label htmlFor="priorityId">
                Nh??m ??u ti??n <span>(*)</span>
              </label>
              <Controller
                {...register('priorityId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="priorityId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {priorities.map((priority) => (
                      <MenuItem
                        key={priority.priorityId}
                        value={priority.priorityId}>
                        {`${priority.priorityId}. ${priority.name}`}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.priorityId ? errors.priorityId.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="healthyCardNumber">S??? th??? BHYT</label>
              <TextField
                {...register('healthyCardNumber')}
                id="healthyCardNumber"
                label=""
                type="text"
              />
              <p className="input-helper">
                {errors?.healthyCardNumber
                  ? errors.healthyCardNumber.message
                  : ''}
              </p>
            </InputComponent>
          </Row>
          <Row>
            <InputComponent>
              <label htmlFor="jobName">Ngh??? nghi???p</label>
              <TextField
                {...register('job')}
                id="jobName"
                label=""
                type="text"
              />
              <p className="input-helper">
                {errors?.job ? errors.job.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="workingUnit">????n v??? c??ng t??c</label>
              <TextField
                {...register('workingUnit')}
                id="workingUnit"
                label=""
                type="text"
              />
              <p className="input-helper">
                {errors?.workingUnit ? errors.workingUnit.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="currentAddress">?????a ch??? hi???n t???i</label>
              <TextField
                id="currentAddress"
                {...register('currentAddress')}
                label=""
                type="text"
              />
              <p className="input-helper">
                {errors?.currentAddress ? errors.currentAddress.message : ''}
              </p>
            </InputComponent>
          </Row>
          <FormHeading>2. Th??ng tin ????ng k?? ti??m ch???ng</FormHeading>
          <Row>
            <InputComponent>
              <label htmlFor="expectDay">Ng??y mu???n ???????c ti??m (d??? ki???n)</label>
              <Controller
                control={control}
                name="expectDay"
                render={({ field: { value, ...fieldProps } }) => (
                  <DatePicker
                    {...fieldProps}
                    selected={value}
                    className="input-expectday"
                    placeholderText="Ng??y/Th??ng/N??m"
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
              <p className="input-helper">
                {errors?.expectDay ? errors.expectDay.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="">Bu???i ti??m mong mu???n</label>
              <Controller
                {...register('expectDateTimeId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="expectDateTimeId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {expectDateTimes.map((expectDateTime) => (
                      <MenuItem
                        key={expectDateTime.expectDateTimeId}
                        value={expectDateTime.expectDateTimeId}>
                        {expectDateTime.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.expectDateTimeId
                  ? errors.expectDateTimeId.message
                  : ''}
              </p>
            </InputComponent>
          </Row>
          <FormHeading highLight>L??u ??:</FormHeading>
          <Row>
            <ul className="note-list">
              <li>
                Vi???c ????ng k?? th??ng tin ho??n to??n b???o m???t v?? ph???c v??? cho chi???n
                d???ch ti??m ch???ng V???c xin COVID - 19
              </li>
              <li>
                Xin vui l??ng ki???m tra k??? c??c th??ng tin b???t bu???c(VD: H??? v?? t??n,
                Ng??y th??ng n??m sinh, S??? ??i???n tho???i, S??? CMND/CCCD/M?? ?????nh danh
                c??ng d??n/HC ...)
              </li>
              <li>
                B???ng vi???c nh???n n??t "X??c nh???n", b???n ho??n to??n hi???u v?? ?????ng ?? ch???u
                tr??ch nhi???m v???i c??c th??ng tin ???? cung c???p.
              </li>
              <li>
                C?? nh??n/T??? ch???c ????ng k?? th??nh c??ng tr??n h??? th???ng s??? ???????c ????a v??o
                danh s??ch ?????t ti??m. C?? s??? y t??? s??? th??ng b??o l???ch ti??m khi c?? v???c
                xin v?? k??? ho???ch ti??m ???????c ph?? duy???t. Tr??n tr???ng c???m ??n!
              </li>
            </ul>
          </Row>
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
export { Step1 };
