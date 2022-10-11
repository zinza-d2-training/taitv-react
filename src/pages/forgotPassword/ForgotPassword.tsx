import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

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
const Header = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 376px;
  height: 480px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  & .MuiInputBase-input {
    padding: 13.5px 16px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    line-height: 23px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }
  & .MuiInputLabel-root {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
  & .MuiFormHelperText-root {
    font-size: 12px;
    line-height: 20px;
    color: #d32f2f;
    margin-right: 0px;
    margin-left: 0px;
  }
`;
const InputComponent = styled.div`
  width: 100%;
`;
const DialogActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 16px;
`;
const ButtonLeft = styled.button`
  outline: none;
  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
  background: #fff;
  & > a {
    display: block;
    cursor: pointer;
    padding: 6px 16px;

    font-size: 16px;
    text-transform: uppercase;
    color: #303f9f;
    letter-spacing: -0.04px;
    text-decoration: none;
  }
`;
const ButtonRight = styled.button`
  outline: none;
  border: 1px solid #303f9f;
  padding: 6px 32px;
  background-color: #303f9f;
  border-radius: 8px 8px 8px 0px;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: -0.04px;
  ${(props: { disable?: boolean }) => ({
    cursor: props.disable ? 'not-allowed' : 'pointer'
  })}
`;
interface IFormData {
  email: string;
}
const schema = yup
  .object({
    email: yup.string().required().email()
  })
  .required();
const ForgotPassword = (props: Props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    if (!isSubmit) {
      setIsSubmit(true);
    }
  };
  useEffect(() => {
    if (isSubmit) {
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    }
  }, [isSubmit]);
  return (
    <Wrapper columns={2}>
      <SideLeft src={background}></SideLeft>
      <SideRight>
        <Container>
          <Header>
            <Typography
              align="center"
              sx={{
                padding: '0px 40px',
                color: 'rgba(0, 0, 0, 0.87)',
                letterSpacing: '-0.04px',
                fontSize: '16px'
              }}>
              Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để
              đăng ký <span style={{ color: '#E53935' }}>(*)</span>
            </Typography>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent>
              <TextField
                error={errors?.email ? true : false}
                {...register('email')}
                id="email"
                helperText={errors?.email ? errors.email.message : ''}
                // Họ tên không được bỏ trống
                placeholder="Email"
                sx={{ width: '100%' }}
              />
            </InputComponent>
            <DialogActions>
              <ButtonLeft>
                <Link to="/Login">QUAY LẠI</Link>
              </ButtonLeft>
              <ButtonRight disable={isSubmit || !isValid} type="submit">
                Gửi
              </ButtonRight>
            </DialogActions>
          </Form>
        </Container>
      </SideRight>
    </Wrapper>
  );
};
export { ForgotPassword };
