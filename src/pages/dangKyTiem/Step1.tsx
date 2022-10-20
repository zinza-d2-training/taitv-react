import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Heading, Steps } from './components/Index';

import { Select, MenuItem } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ArrowBack } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';
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
  & .MuiSelect-select,
  & .input-expectday {
    width: 322px;
    padding: 0px !important;
    height: 40px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    align-items: center;
    padding-left: 8px !important;
  }
  & .MuiOutlinedInput-notchedOutline,
  & .input-expectday {
    border-radius: 4px;
    width: 328px;
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
const priorities = [
  { name: 'nhom uu tien 1', priorityId: 1 },
  { name: 'nhom uu tien 2', priorityId: 2 },
  { name: 'nhom uu tien 3', priorityId: 3 }
];
const healthyCardNumbers = [
  { name: 'nhom uu tien 1', healthyCardId: 1 },
  { name: 'nhom uu tien 2', healthyCardId: 2 },
  { name: 'nhom uu tien 3', healthyCardId: 3 }
];
const jobs = [
  { name: 'nhom uu tien 1', jobId: 1 },
  { name: 'nhom uu tien 2', jobId: 2 },
  { name: 'nhom uu tien 3', jobId: 3 }
];
const workingUnits = [
  { name: 'nhom uu tien 1', workingUnitId: 1 },
  { name: 'nhom uu tien 2', workingUnitId: 2 },
  { name: 'nhom uu tien 3', workingUnitId: 3 }
];
const currentAddresses = [
  { name: 'nhom uu tien 1', currentAddressId: 1 },
  { name: 'nhom uu tien 2', currentAddressId: 2 },
  { name: 'nhom uu tien 3', currentAddressId: 3 }
];
const expectDateTimes = [
  { name: 'sáng', expectDateTimeId: 1 },
  { name: 'trưa', expectDateTimeId: 2 },
  { name: 'chiều', expectDateTimeId: 3 }
];
interface IFormData {
  priorityId: number;
  healthyCardId: number;
  jobId: number;
  workingUnitId: number;
  currentAddressId: number;
  expectDay: Date;
  expectDateTimeId: number;
}
const schema = yup
  .object({
    priorityId: yup.number().required('Nhóm ưu tiên không được bỏ trống'),
    healthyCardId: yup.number().required('Số thẻ BHYT không được bỏ trống'),
    jobId: yup.number().required('Nghề nghiệp không được bỏ trống'),
    workingUnitId: yup.number().required('Đơn vị công tác không được bỏ trống'),
    currentAddressId: yup
      .number()
      .required('Địa chỉ hiện tại không được bỏ trống'),
    expectDay: yup.date().required('Ngày mong muấn không được bỏ trống'),
    expectDateTimeId: yup
      .number()
      .required('Buổi tiêm mong muấn không được bỏ trống')
  })
  .required();
const Step1 = (props: Props) => {
  const currentStep = useMemo(() => 2, []);
  const [completed, setCompleted] = useState([1]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
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
                        {priority.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.priorityId ? errors.priorityId.message : ''}
              </p>
            </InputComponent>
            <InputComponent fullWidth>
              <label htmlFor="healthyCardId">Số thẻ BHYT</label>
              <Controller
                {...register('healthyCardId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="healthyCardId"
                    {...field}
                    onChange={(event) => {
                      field.onChange(Number(event.target.value));
                    }}>
                    {healthyCardNumbers.map((healthyCardNumber) => (
                      <MenuItem
                        key={healthyCardNumber.healthyCardId}
                        value={healthyCardNumber.healthyCardId}>
                        {healthyCardNumber.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.healthyCardId ? errors.healthyCardId.message : ''}
              </p>
            </InputComponent>
          </Row>
          <Row>
            <InputComponent>
              <label htmlFor="jobId">Nghề nghiệp</label>
              <Controller
                {...register('jobId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="jobId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {jobs.map((job) => (
                      <MenuItem key={job.jobId} value={job.jobId}>
                        {job.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.jobId ? errors.jobId.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="workingUnitId">Đơn vị công tác</label>
              <Controller
                {...register('workingUnitId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="workingUnitId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {workingUnits.map((workingUnit) => (
                      <MenuItem
                        key={workingUnit.workingUnitId}
                        value={workingUnit.workingUnitId}>
                        {workingUnit.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.workingUnitId ? errors.workingUnitId.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="currentAddressId">Địa chỉ hiện tại</label>
              <Controller
                {...register('currentAddressId')}
                control={control}
                render={({ field }) => (
                  <Select
                    id="currentAddressId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {currentAddresses.map((currentAddress) => (
                      <MenuItem
                        key={currentAddress.currentAddressId}
                        value={currentAddress.currentAddressId}>
                        {currentAddress.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.currentAddressId
                  ? errors.currentAddressId.message
                  : ''}
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
