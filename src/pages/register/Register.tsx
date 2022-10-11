import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../../access/images/side_left.png';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
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
  alignItems: 'flex-start'
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
`;
const Header = styled.div`
  & .MuiTypography-root {
    font-size: 34px;
    font-weight: 700;
    line-height: 123.5%;
    color: rgba(0, 0, 0, 0.87);
  }
`;
const Grid = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 36px;
  width: 400px;
`;
const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 400px;
  height: 79px;
  & .MuiTextField-root {
    width: 100%;
  }
  & .MuiInputBase-root {
    border-radius: 4px;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid #c4c4c4;
  }
  & .MuiFormHelperText-root {
    margin: 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #d32f2f;
  }
`;
const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  & span {
    color: #d32f2f;
  }
`;
const DialogAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & .MuiButtonBase-root {
    text-transform: uppercase;
    font-size: 14px;
    color: #3f51b5;
  }
`;
interface IFormData {
  identityCardNumber: string;
  email: string;
  password: string;
  name: string;
  birthday: string;
  sex: string;
}
const schema = yup
  .object({
    identityCardNumber: yup
      .string()
      .required()
      .matches(/(\d{9}|\d{12})/, { message: 'Số cmnd gồm 9 hoặc 12 số!' }),
    email: yup.string().email().required(),
    password: yup.string().min(8).trim(),
    name: yup.string().required(),
    birthday: yup.string().required(),
    sex: yup
      .string()
      .required()
      .matches(/(nam|nữ)/, { message: 'Giới tính là nam hoặc nữ' })
  })
  .required();
const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <Wrapper columns={2}>
      <SideLeft src={background}></SideLeft>
      <SideRight>
        <Container>
          <Header>
            <Typography component="h4" align="center">
              Đăng ký tài khoản
            </Typography>
          </Header>

          <Grid onSubmit={handleSubmit(onSubmit)}>
            <InputComponent>
              <Label htmlFor="identityCardNumber">
                Số CMND/CCCD <span>(*)</span>
              </Label>
              <TextField
                {...register('identityCardNumber')}
                id="identityCardNumber"
                error={errors?.identityCardNumber ? true : false}
                defaultValue=""
                helperText={
                  errors?.identityCardNumber
                    ? errors?.identityCardNumber.message
                    : ''
                }
                placeholder="Số CMND/CCCD"
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="email">
                Email <span>(*)</span>
              </Label>
              <TextField
                id="email"
                {...register('email')}
                error={errors?.email ? true : false}
                type="email"
                defaultValue=""
                helperText={errors?.email ? errors.email.message : ''}
                placeholder="Email"
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="password">
                Mật khẩu <span>(*)</span>
              </Label>
              <TextField
                id="password"
                {...register('password')}
                error={errors?.password ? true : false}
                type="password"
                defaultValue=""
                helperText={errors?.password ? errors.password.message : ''}
                placeholder="*****************"
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="name">
                Họ và tên <span>(*)</span>
              </Label>
              <TextField
                {...register('name')}
                id="name"
                error={errors?.name ? true : false}
                type="text"
                defaultValue=""
                helperText={errors?.name ? errors.name.message : ''}
                placeholder="Họ và tên"
              />
            </InputComponent>
            <InputComponent>
              <Label htmlFor="birthday">
                Ngày sinh <span>(*)</span>
              </Label>
              <LocalizationProvider id="birthday" dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  {...register('birthday')}
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </InputComponent>
            <InputComponent>
              <Label htmlFor="sex">
                Giới tính <span>(*)</span>
              </Label>
              <TextField
                id="sex"
                {...register('sex')}
                error={errors?.sex ? true : false}
                type="text"
                defaultValue=""
                helperText={errors?.sex ? errors.sex.message : ''}
                placeholder="Giới tính"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Tỉnh/Thành phố <span>(*)</span>
              </Label>
              <FormControl fullWidth>
                <Select displayEmpty>
                  <MenuItem value="">
                    <em>Tỉnh/Thành phố</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </InputComponent>
            <InputComponent>
              <Label>
                Quận/Huyện <span>(*)</span>
              </Label>
              <FormControl fullWidth>
                <Select displayEmpty>
                  <MenuItem value="">
                    <em>Quận/Huyện</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </InputComponent>
            <InputComponent>
              <Label>
                Xã/Phường <span>(*)</span>
              </Label>
              <FormControl fullWidth>
                <Select displayEmpty>
                  <MenuItem value="">
                    <em>Xã/Phường</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </InputComponent>
            <DialogAction>
              <Button endIcon={<ArrowForwardIcon />} type="submit">
                tiếp tục
              </Button>
            </DialogAction>
          </Grid>
        </Container>
      </SideRight>
    </Wrapper>
  );
};
export { Register };
