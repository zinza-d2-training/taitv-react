import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

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
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 376px;
  height: 480px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const Header = styled.div`
  height: 42px;
  width: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;
const InputComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  height: 79px;
  & .MuiInputBase-input {
    padding: 13.5px 16px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    line-height: 23px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }
  & .MuiFormHelperText-root {
    margin: 0px;
    font-size: 16px;
    position: relative;
    top: -3px;
  }
`;
const Lable = styled.label`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;
const Links = styled.div`
  width: 100%;
  & > a {
    display: block;
    text-align: right;
    color: #3949ab;
    font-size: 14px;
    text-decoration: none;
  }
`;
const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  outline: none;
  background: #66bb6a;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  ${(props: { disable: boolean }) =>
    !!props.disable
      ? {
          cursor: 'not-allowed',
          opacity: '0.6'
        }
      : {
          cursor: 'pointer',
          opacity: '1'
        }};
  color: #fff;
  position: relative;
  & > span {
    color: red;
    position: absolute;
    font-size: 16px;
    bottom: 0;
    left: 0;
    font-weight: 400;
    transform: translateY(100%);
  }
`;
const RegisterButton = styled.button`
  width: 100%;
  border: 1px solid #66bb6a;
  outline: none;
  background: transparent;
  border-radius: 5px;
  & > a {
    display: block;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    color: #66bb6a;
    text-decoration: none;
  }
`;
interface IFormData {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().min(8).required().trim()
  })
  .required();
const Login = (props: Props) => {
  const [serverErr, setServerErr] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    console.log(data);
    setServerErr('co loi');
  };

  return (
    <Wrapper columns={2}>
      <SideLeft src={background}></SideLeft>
      <SideRight>
        <Container>
          <Header>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
              Đăng nhập vào tài khoản
            </Typography>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent>
              <Lable htmlFor="email">Email</Lable>
              <TextField
                error={errors?.email ? true : false}
                {...register('email')}
                id="email"
                label=""
                type="text"
                helperText={errors?.email ? errors.email.message : ''}
                placeholder="Email"
                sx={{ width: '100%' }}
              />
            </InputComponent>
            <InputComponent>
              <Lable htmlFor="password">Password</Lable>
              <TextField
                {...register('password')}
                error={errors?.password ? true : false}
                id="password"
                label=""
                type="password"
                helperText={errors?.password ? errors.password.message : ''}
                placeholder="****************"
                sx={{ width: '100%' }}
              />
            </InputComponent>
            <Links>
              <Link to="/ForgotPassword">Quên mật khẩu?</Link>
            </Links>
            <LoginButton disable={!isValid} type="submit">
              Đăng nhập <span>{serverErr}</span>
            </LoginButton>
            <Typography
              align="center"
              sx={{
                width: '100%',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '-0.04px',
                color: 'rgba(0, 0, 0, 0.87)'
              }}>
              Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký !
            </Typography>
            <RegisterButton>
              <Link to="/register">Đăng ký</Link>
            </RegisterButton>
          </Form>
        </Container>
      </SideRight>
    </Wrapper>
  );
};
export { Login };
