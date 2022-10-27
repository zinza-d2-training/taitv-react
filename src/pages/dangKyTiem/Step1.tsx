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
    priorityId: yup.number().required('Nhóm ưu tiên không được bỏ trống'),
    healthyCardNumber: yup
      .string()
      .required('Số thẻ BHYT không được bỏ trống')
      .matches(/^[0-9]+$/, 'Số thẻ BHYT là số'),
    job: yup.string().required('Nghề nghiệp không được bỏ trống'),
    workingUnit: yup.string().required('Đơn vị công tác không được bỏ trống'),
    currentAddress: yup
      .string()
      .required('Địa chỉ hiện tại không được bỏ trống'),
    expectDay: yup.date().required('Ngày mong muấn không được bỏ trống'),
    expectDateTimeId: yup
      .number()
      .required('Buổi tiêm mong muấn không được bỏ trống')
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
      <Heading title="Thông tin cá nhân" />
      <Steps active={currentStep} completed={completed} />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <FormHeading>1. Thông tin người đăng ký tiêm</FormHeading>
          <Row>
            <InputComponent>
              <label htmlFor="priorityId">
                Nhóm ưu tiên <span>(*)</span>
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
              <label htmlFor="healthyCardNumber">Số thẻ BHYT</label>
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
              <label htmlFor="jobName">Nghề nghiệp</label>
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
              <label htmlFor="workingUnit">Đơn vị công tác</label>
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
              <label htmlFor="currentAddress">Địa chỉ hiện tại</label>
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
          <FormHeading>2. Thông tin đăng ký tiêm chủng</FormHeading>
          <Row>
            <InputComponent>
              <label htmlFor="expectDay">Ngày muốn được tiêm (dự kiến)</label>
              <Controller
                control={control}
                name="expectDay"
                render={({ field: { value, ...fieldProps } }) => (
                  <DatePicker
                    {...fieldProps}
                    selected={value}
                    className="input-expectday"
                    placeholderText="Ngày/Tháng/Năm"
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
              <p className="input-helper">
                {errors?.expectDay ? errors.expectDay.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="">Buổi tiêm mong muốn</label>
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
          <FormHeading highLight>Lưu ý:</FormHeading>
          <Row>
            <ul className="note-list">
              <li>
                Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến
                dịch tiêm chủng Vắc xin COVID - 19
              </li>
              <li>
                Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên,
                Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã định danh
                công dân/HC ...)
              </li>
              <li>
                Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu
                trách nhiệm với các thông tin đã cung cấp.
              </li>
              <li>
                Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được đưa vào
                danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch tiêm khi có vắc
                xin và kế hoạch tiêm được phê duyệt. Trân trọng cảm ơn!
              </li>
            </ul>
          </Row>
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
export { Step1 };
