import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImgSideForm } from '../../access/index';
import styled from '@emotion/styled';
import { Typography, TextField } from '@mui/material';
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
  & .MuiTypography-h4 {
    width: 376px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 123.5%;
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: 0px;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 376px;
`;
const InputComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  & .MuiInputBase-input {
    padding: 13.5px 16px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    line-height: 23px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }
  & .MuiFormHelperText-root {
    margin: 0px;
    font-size: 12px;
    position: relative;
    color: #d32f2f;
    top: 0;
    line-height: 20px;
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
    height: 20px;
    font-size: 14px;
    line-height: 143%;
    text-align: right;
    letter-spacing: -0.04px;
    color: #3949ab;
    text-decoration: none;
  }
`;
const LoginButton = styled.button`
  width: 100%;
  padding: 15.5px;
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
          cursor: 'not-allowed'
        }
      : {
          cursor: 'pointer'
        }};
  color: #fff;
  position: relative;
  & > span {
    color: #d32f2f;
    position: absolute;
    font-size: 12px;
    bottom: 0;
    left: 0;
    font-weight: 400;
    transform: translateY(100%);
  }
`;
const RegisterButton = styled.button`
  width: 100%;
  border: 1px solid #9ccc65;
  outline: none;
  background: transparent;
  border-radius: 5px;
  & > a {
    display: block;
    padding: 13px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: -0.04px;
    color: #9ccc65;
  }
`;
interface IFormData {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .required('H??? t??n kh??ng ???????c b??? tr???ng')
      .email('Ph???i ????ng ?????nh d???ng email'),
    password: yup
      .string()
      .min(8, 'M???t kh???u t???i thi???u 8 k?? t???')
      .required()
      .trim()
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
    setServerErr('Th??ng tin t??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c');
  };

  const clearErr = () => {
    if (!isValid) {
      setServerErr('');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper columns={2}>
        <SideLeft src={ImgSideForm}></SideLeft>
        <SideRight>
          <Container>
            <Header>
              <Typography variant="h4" component="h4">
                ????ng nh???p v??o t??i kho???n
              </Typography>
            </Header>
            <Form>
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
            </Form>
            <Links>
              <Link to="/ForgotPassword">Qu??n m???t kh???u?</Link>
            </Links>
            <LoginButton disable={!isValid} type="submit" onClick={clearErr}>
              ????ng nh???p <span>{serverErr}</span>
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
              Ho???c ????ng k?? t??i kho???n, n???u b???n ch??a ????ng k?? !
            </Typography>
            <RegisterButton>
              <Link to="/register">????ng k??</Link>
            </RegisterButton>
          </Container>
        </SideRight>
      </Wrapper>
    </form>
  );
};

export { Login };
