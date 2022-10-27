import React from 'react';
import styled from '@emotion/styled';
import { Select, MenuItem, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFUserInfo } from '../../../../interfaces/user';
import {
  provinces,
  districts,
  wards,
  genders
} from '../../../../fake/userInfo';
import { Edit } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
type Props = {};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 16px;
  gap: 16px;
`;
const Session = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
const Heading = styled.p`
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  gap: 8px;
  & svg {
    width: 24px;
    height: 24px;
    fill: rgba(0, 0, 0, 0.54);
  }
`;
const InputComponent = styled.div`
  ${(props: { fullWidth?: boolean }) =>
    !!props?.fullWidth ? `width: 100%` : 'width: 318px'};
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
const ButtonSubmit = styled.button`
  border: none;
  outline: none;
  padding: 6px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  background: #3f51b5;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: white;
`;
const ButtonCancel = styled.div`
  padding: 6px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  border-radius: 4px;
  background: white;
  border: 1px solid rgba(63, 81, 181, 0.5);
  color: #3f51b5;
`;
const schema = yup
  .object({
    identityCardNumber: yup
      .string()
      .required('Chứng minh nhân dân là bắt buộc')
      .matches(/^[0-9]+$/, 'Chứng minh nhân dân là số')
      .matches(/^(\d{9}|\d{12})$/, 'Chứng minh nhân dân gồm 9 hoặc 12 số'), ///^(\d{9}|\d{12})$/
    name: yup.string().required('Tên là bắt buộc').trim(),
    birthday: yup.date().required('Ngày sinh là bắt buộc'),
    provinceId: yup.number().required('Tỉnh/thành phố là bắt buộc'),
    gender: yup.number().required('Giới tính là bắt buộc'),
    districtId: yup.number().required('Quận/huyện là bắt buộc'),
    wardId: yup.number().required('Xã/phường là bắt buộc')
  })
  .required();
const User = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<Partial<IFUserInfo>>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: Partial<IFUserInfo>) => {
    console.log(data);
  };
  const handleCancel = () => {
    reset();
  };
  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Session>
          <Heading>
            Thông tin cá nhân <Edit />
          </Heading>
          <Row>
            <InputComponent>
              <label htmlFor="identityCardNumber">
                Số CMND/CCCD/Mã định danh
              </label>
              <TextField
                {...register('identityCardNumber')}
                id="identityCardNumber"
                label=""
                type="text"
              />
              <p className="input-helper">
                {errors?.identityCardNumber
                  ? errors.identityCardNumber.message
                  : ''}
              </p>
            </InputComponent>
          </Row>
        </Session>
        <Session>
          <Row>
            <InputComponent>
              <label htmlFor="name">Họ và tên</label>
              <TextField {...register('name')} id="name" label="" type="text" />
              <p className="input-helper">
                {errors?.name ? errors.name.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label>Ngày sinh</label>
              <Controller
                control={control}
                name="birthday"
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
                {errors?.birthday ? errors.birthday.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="gender">Giới tính</label>
              <Controller
                control={control}
                {...register('gender')}
                render={({ field }) => (
                  <Select
                    id="gender"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {genders.map((genderItem) => (
                      <MenuItem
                        key={genderItem.gender}
                        value={genderItem.gender}>
                        {genderItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.gender ? errors.gender.message : ''}
              </p>
            </InputComponent>
          </Row>
          <Row>
            <InputComponent>
              <label>Tỉnh/Thành phố</label>
              <Controller
                control={control}
                {...register('provinceId')}
                render={({ field }) => (
                  <Select
                    id="provinceId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {provinces.map((province) => (
                      <MenuItem
                        key={province.provinceId}
                        value={province.provinceId}>
                        {province.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.provinceId ? errors.provinceId.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="districtId">Quận/Huyện</label>
              <Controller
                control={control}
                {...register('districtId')}
                render={({ field }) => (
                  <Select
                    id="districtId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {districts.map((district) => (
                      <MenuItem
                        key={district.districtId}
                        value={district.districtId}>
                        {district.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.districtId ? errors.districtId.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label htmlFor="wardId">Phường/Xã</label>
              <Controller
                control={control}
                {...register('wardId')}
                render={({ field }) => (
                  <Select
                    id="wardId"
                    {...field}
                    onChange={(event) =>
                      field.onChange(Number(event.target.value))
                    }>
                    {wards.map((ward) => (
                      <MenuItem key={ward.wardId} value={ward.wardId}>
                        {ward.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.wardId ? errors.wardId.message : ''}
              </p>
            </InputComponent>
          </Row>
          <Row>
            <ButtonCancel onClick={handleCancel}>Hủy Bỏ</ButtonCancel>
            <ButtonSubmit type="submit">Lưu</ButtonSubmit>
          </Row>
        </Session>
      </Container>
    </form>
  );
};
export { User };
