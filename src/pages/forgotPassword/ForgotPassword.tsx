import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

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
  width: 479px;
  height: 229px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 479px;
  height: 48px;
  padding: 0px 40px;
  & .MuiTypography-root {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.04px;
    color: rgba(0, 0, 0, 0.87);
  }
  & span {
    color: #e53935;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 479px;
`;
const InputComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  & .MuiInputBase-input {
    padding: 12.5px 16px;
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
    top: 3px;
    line-height: 20px;
  }
`;
const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 16px;
  width: 479px;
  height: 60px;
  & .btn-left,
  & .btn-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.04px;
    border-radius: 8px 8px 8px 0px;
  }
  & .btn-left {
    width: 101px;
    border: 1px solid #303f9f;
    background: #ffffff;
    color: #303f9f;
  }
  & .btn-right {
    width: 91px;
    background: #303f9f;
    border: none;
    color: #ffffff;
  }
  ${(props: { isSending?: boolean; isValid?: boolean }) => `
     & .btn-left{
      cursor: ${props?.isSending ? 'not-allowed' : 'pointer'}
     };
     & .btn-right{
      cursor: ${props?.isSending || !props?.isValid ? 'not-allowed' : 'pointer'}
     }
  `}
`;
interface IFormData {
  email: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .required('Email không được bỏ trống')
      .email('Phải đúng định dạng email')
  })
  .required();
const ForgotPassword = (props: Props) => {
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isSending) {
      setTimeout(() => {
        navigate('/Login');
      }, 2000);
    }
  }, [isSending]);
  const onSubmit = (data: IFormData) => {
    setIsSending(true);
  };

  const handleTurnBack = () => {
    if (!isSending) {
      navigate('/Login');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper columns={2}>
        <SideLeft src={background}></SideLeft>
        <SideRight>
          <Container>
            <Header>
              <Typography>
                Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để
                đăng ký <span>(*)</span>
              </Typography>
            </Header>
            <Form>
              <InputComponent>
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
            </Form>
            <DialogActions isSending={isSending} isValid={isValid}>
              {/* disable when requesting */}
              <button className="btn-left" onClick={handleTurnBack}>
                Quay lại
              </button>
              {/* disable when requesting or invalid */}
              <button className="btn-right" type="submit">
                gửi
              </button>
            </DialogActions>
          </Container>
        </SideRight>
      </Wrapper>
    </form>
  );
};

export { ForgotPassword };
