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
const Register = (props: Props) => {
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

          <Grid>
            <InputComponent>
              <Label>
                Số CMND/CCCD <span>(*)</span>
              </Label>
              <TextField
                error={true}
                defaultValue=""
                helperText="Số CMND/CCCD không được bỏ trống"
                placeholder="Số CMND/CCCD"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Email <span>(*)</span>
              </Label>
              <TextField
                error={false}
                type="email"
                defaultValue=""
                helperText=""
                placeholder="Email"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Mật khẩu <span>(*)</span>
              </Label>
              <TextField
                error={false}
                type="password"
                defaultValue=""
                helperText=""
                placeholder="*****************"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Họ và tên <span>(*)</span>
              </Label>
              <TextField
                error={false}
                type="text"
                defaultValue=""
                helperText=""
                placeholder="Họ và tên"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Ngày sinh <span>(*)</span>
              </Label>
              <TextField
                error={false}
                type="date"
                defaultValue=""
                helperText=""
                placeholder="Ngày/Tháng/Năm"
              />
            </InputComponent>
            <InputComponent>
              <Label>
                Giới tính <span>(*)</span>
              </Label>
              <TextField
                error={false}
                type="text"
                defaultValue=""
                helperText=""
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
              <Button endIcon={<ArrowForwardIcon />}>tiếp tục</Button>
            </DialogAction>
          </Grid>
        </Container>
      </SideRight>
    </Wrapper>
  );
};
export { Register };
