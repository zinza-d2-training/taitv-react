import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  & .input-birthday-helper {
    margin: 0px;
    font-size: 12px;
    position: relative;
    color: #d32f2f;
    top: 3px;
    line-height: 20px;
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
interface IFormData {
  identityCardNumber: string;
  email: string;
  password: string;
  name: string;
  birthday: Date;
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
    birthday: yup.date().required('Ngày sinh là bắt buộc')
  })
  .required();
const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  console.log(errors);

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
                          dateFormat="yyyy/MM/dd"
                        />
                        <p className="input-birthday-helper">
                          {errors?.birthday ? errors.birthday.message : ''}
                        </p>
                      </div>
                    );
                  }}
                />
              </InputComponent>
            </Grid>
            <DialogActions>
              <Button
                variant="contained"
                type="submit"
                endIcon={<ArrowForwardIcon />}>
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
