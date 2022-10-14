import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type {
  Control,
  NestedValue,
  SubmitHandler,
  DefaultValues
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
type Props = {};

const Wrapper = styled.div((props: { columns?: number }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${props?.columns ? props.columns : 2}, 1fr)`,
  gridTemplateRows: '100vh'
}));
const SideLeft = styled.img((props: { src: string; alt?: string }) => ({
  objectFit: 'cover',
  height: '100%',
  width: '100%'
}));
const SideRight = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 24px 0px;
  gap: 16px;
  width: 600px;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Header = styled.div`
  display: block;
  width: 100%;
  height: 42px;
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.87);
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 16px;
  width: 400px;
`;
const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 100%;
  background: #ffffff;
  & label {
    height: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
    span {
      color: #d32f2f;
    }
  }
  & .MuiInputBase-input,
  & .input-birthday {
    width: 100%;
    padding: 12.5px 8px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    line-height: 23px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
  }
  & .MuiFormHelperText-root,
  & .input-helper {
    margin: 0px;
    font-size: 12px;
    position: relative;
    color: #d32f2f;
    top: 3px;
    line-height: 20px;
  }
  & .MuiOutlinedInput-root {
    width: 100%;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23) !important;
    border-width: 1px;
  }
  & .MuiSvgIcon-root {
    font-size: 25px;
  }
`;
const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 0px;
  gap: 16px;
  width: 400px;
  height: 60px;
  & .MuiButtonBase-root {
    padding: 0;
    border-radius: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 87px;
    height: 24px;
    background: #ffffff;
    box-shadow: unset;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
    color: #3f51b5;
    &:hover {
      background-color: #ffffff !important;
      box-shadow: unset;
    }
  }
  & .MuiButton-endIcon {
    margin-right: 0;
    margin-left: 0;
    & .MuiSvgIcon-root {
      width: 16px;
    }
  }
`;
// interface ICountry {
//   code: number;
//   label: string;
//   phone: string;
// }
const provinces = [
  { name: 'mot', provinceId: 1 },
  { name: 'hai', provinceId: 2 },
  { name: 'ba', provinceId: 3 }
];
const dictricts = [
  { name: 'mot', dictrictId: 1 },
  { name: 'hai', dictrictId: 2 },
  { name: 'ba', dictrictId: 3 }
];
const wards = [
  { name: 'mot', wardId: 1 },
  { name: 'hai', wardId: 2 },
  { name: 'ba', wardId: 3 }
];
interface IFormData {
  identityCardNumber: string;
  email: string;
  password: string;
  name: string;
  birthday: Date;
  provinceId: number;
  gender: number;
  districtId: number;
  wardId: number;
}

// identityCardNumber,email,password,name,birthday
const schema = yup
  .object({
    identityCardNumber: yup
      .string()
      .required('Chứng minh nhân dân là bắt buộc')
      .matches(/^[0-9]+$/, 'Chứng minh nhân dân là số')
      .matches(/^(\d{9}|\d{12})$/, 'Chứng minh nhân dân gồm 9 hoặc 12 số'), ///^(\d{9}|\d{12})$/
    email: yup
      .string()
      .required('Email không được bỏ trống')
      .email('Phải đúng định dạng email'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu chứa tối thiểu 8 ký tự')
      .trim(),
    name: yup.string().required('Tên là bắt buộc').trim(),
    birthday: yup.date().required('Ngày sinh là bắt buộc'),
    provinceId: yup.number().required('Tỉnh/thành phố là bắt buộc'),
    gender: yup.number().required('Giới tính là bắt buộc'),
    districtId: yup.number().required('Quận/huyện là bắt buộc'),
    wardId: yup.string().required('Xã/phường là bắt buộc')
  })
  .required();
const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper columns={2}>
        <SideLeft src={background}></SideLeft>
        <SideRight>
          <Container>
            <Header>Đăng ký tài khoản</Header>
            <Grid>
              {/* input for identityCardNumber */}
              <InputComponent>
                <label htmlFor="identityCardNumber">
                  Số CMND/CCCD <span>(*)</span>
                </label>
                <TextField
                  {...register('identityCardNumber')}
                  error={errors?.identityCardNumber ? true : false}
                  id="identityCardNumber"
                  label=""
                  type="text"
                  helperText={
                    errors?.identityCardNumber
                      ? errors.identityCardNumber.message
                      : ''
                  }
                  placeholder="Số CMND/CCCD"
                  sx={{ width: '100%' }}
                />
              </InputComponent>

              {/* input for email */}
              <InputComponent>
                <label htmlFor="email">
                  Email <span>(*)</span>
                </label>
                <TextField
                  {...register('email')}
                  error={errors?.email ? true : false}
                  id="email"
                  label=""
                  type="email"
                  helperText={errors?.email ? errors.email.message : ''}
                  placeholder="Email"
                  sx={{ width: '100%' }}
                />
              </InputComponent>

              {/* input for password */}
              <InputComponent>
                <label htmlFor="password">
                  Mật khẩu <span>(*)</span>
                </label>
                <TextField
                  {...register('password')}
                  error={errors?.password ? true : false}
                  id="password"
                  label=""
                  type="password"
                  helperText={errors?.password ? errors.password.message : ''}
                  placeholder="*****************"
                  sx={{ width: '100%' }}
                />
              </InputComponent>

              {/* input for name */}
              <InputComponent>
                <label htmlFor="name">
                  Họ và tên <span>(*)</span>
                </label>
                <TextField
                  {...register('name')}
                  error={errors?.name ? true : false}
                  id="text"
                  label=""
                  type="text"
                  helperText={errors?.name ? errors.name.message : ''}
                  placeholder="Họ và tên"
                  sx={{ width: '100%' }}
                />
              </InputComponent>

              {/* input for birthday */}
              <InputComponent>
                <label htmlFor="birthday">
                  Ngày sinh <span>(*)</span>
                </label>
                <Controller
                  control={control}
                  name="birthday"
                  render={({ field: { value, ...fieldProps } }) => {
                    return (
                      <div style={{ width: '100%' }}>
                        <DatePicker
                          {...fieldProps}
                          selected={value}
                          className="input-birthday"
                          placeholderText="Ngày/Tháng/Năm"
                          dateFormat="dd/MM/yyyy"
                        />
                        <p className="input-helper">
                          {errors?.birthday ? errors.birthday.message : ''}
                        </p>
                      </div>
                    );
                  }}
                />
              </InputComponent>

              {/* input for gender */}
              <InputComponent>
                <label htmlFor="gender">
                  Giới tính <span>(*)</span>
                </label>
                <Controller
                  control={control}
                  {...register('gender')}
                  render={({ field }) => {
                    return (
                      <div style={{ width: '100%' }}>
                        <Select
                          placeholder=""
                          id="gender"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                          }}
                          // defaultValue={2}
                        >
                          <MenuItem value={0}>Nam</MenuItem>
                          <MenuItem value={1}>Nữ</MenuItem>
                          <MenuItem value={2}>Khác</MenuItem>
                        </Select>
                        <p className="input-helper">
                          {errors?.gender ? errors.gender.message : ''}
                        </p>
                      </div>
                    );
                  }}
                />
              </InputComponent>

              {/* input for province */}
              <InputComponent>
                <label htmlFor="province">
                  Tỉnh/Thành phố <span>(*)</span>
                </label>
                <Controller
                  {...register('provinceId')}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: '100%' }}>
                      <Select
                        id="province"
                        {...field}
                        onChange={(event) => {
                          field.onChange(Number(event.target.value));
                        }}>
                        {provinces.map((province, index) => (
                          <MenuItem key={index} value={province.provinceId}>
                            {province.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="input-helper">
                        {errors?.provinceId ? errors.provinceId.message : ''}
                      </p>
                    </div>
                  )}
                />
              </InputComponent>

              {/* input for dictrict */}
              <InputComponent>
                <label htmlFor="dictrict">
                  Quận/Huyện <span>(*)</span>
                </label>
                <Controller
                  {...register('districtId')}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: '100%' }}>
                      <Select
                        id="dictrict"
                        {...field}
                        onChange={(event) => {
                          field.onChange(Number(event.target.value));
                        }}>
                        {dictricts.map((dictrict, index) => (
                          <MenuItem key={index} value={dictrict.dictrictId}>
                            {dictrict.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="input-helper">
                        {errors?.districtId ? errors.districtId.message : ''}
                      </p>
                    </div>
                  )}
                />
              </InputComponent>

              {/* input for ward */}
              <InputComponent>
                <label htmlFor="ward">
                  Xã/Phường <span>(*)</span>
                </label>
                <Controller
                  {...register('wardId')}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: '100%' }}>
                      <Select
                        id="ward"
                        {...field}
                        onChange={(event) => {
                          field.onChange(Number(event.target.value));
                        }}>
                        {wards.map((ward, index) => (
                          <MenuItem key={index} value={ward.wardId}>
                            {ward.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="input-helper">
                        {errors?.wardId ? errors.wardId.message : ''}
                      </p>
                    </div>
                  )}
                />
              </InputComponent>
            </Grid>
            <DialogActions>
              <Button
                variant="contained"
                type="submit"
                endIcon={<ArrowForwardIos />}>
                Tiếp tục
              </Button>
            </DialogActions>
          </Container>
        </SideRight>
      </Wrapper>
    </form>
  );
};

export { Register };
