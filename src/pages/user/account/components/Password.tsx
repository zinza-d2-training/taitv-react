import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFUserInfo } from '../../../../interfaces/user';
import { Edit } from '@mui/icons-material';
type Props = {};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
interface IFUserPassword extends IFUserInfo {
  confirmPassword: string;
}
const schema = yup
  .object({
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(8, 'Mật khẩu chứa tối thiểu 8 ký tự')
      .trim(),
    confirmPassword: yup
      .string()
      .required('Mật khẩu mới là bắt buộc')
      .min(8, 'Mật khẩu mới chứa tối thiểu 8 ký tự')
      .trim()
  })
  .required();
const Password = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Partial<IFUserPassword>>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: Partial<IFUserPassword>) => {
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
              <label htmlFor="password">Mật khẩu</label>
              <TextField
                {...register('password')}
                id="password"
                label=""
                type="password"
              />
              <p className="input-helper">
                {errors?.password ? errors.password.message : ''}
              </p>
            </InputComponent>
          </Row>
          <Row>
            <InputComponent>
              <label htmlFor="confirm-password">Xác nhận lại mật khẩu</label>
              <TextField
                {...register('confirmPassword')}
                id="confirmPassword"
                label=""
                type="password"
              />
              <p className="input-helper">
                {errors?.confirmPassword ? errors.confirmPassword.message : ''}
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
export { Password };
