import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImgSideForm } from '../../access/index';
import styled from '@emotion/styled';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { IFUserInfo } from '../../interfaces/user';
import { provinces, districts, wards } from '../../fake/userInfo';
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

const schema = yup
  .object({
    identityCardNumber: yup
      .string()
      .required('Ch???ng minh nh??n d??n l?? b???t bu???c')
      .matches(/^[0-9]+$/, 'Ch???ng minh nh??n d??n l?? s???')
      .matches(/^(\d{9}|\d{12})$/, 'Ch???ng minh nh??n d??n g???m 9 ho???c 12 s???'), ///^(\d{9}|\d{12})$/
    email: yup
      .string()
      .required('Email kh??ng ???????c b??? tr???ng')
      .email('Ph???i ????ng ?????nh d???ng email'),
    password: yup
      .string()
      .required('M???t kh???u l?? b???t bu???c')
      .min(8, 'M???t kh???u ch???a t???i thi???u 8 k?? t???')
      .trim(),
    name: yup.string().required('T??n l?? b???t bu???c').trim(),
    birthday: yup.date().required('Ng??y sinh l?? b???t bu???c'),
    provinceId: yup.number().required('T???nh/th??nh ph??? l?? b???t bu???c'),
    gender: yup.number().required('Gi???i t??nh l?? b???t bu???c'),
    districtId: yup.number().required('Qu???n/huy???n l?? b???t bu???c'),
    wardId: yup.number().required('X??/ph?????ng l?? b???t bu???c')
  })
  .required();
const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFUserInfo>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFUserInfo) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper columns={2}>
        <SideLeft src={ImgSideForm}></SideLeft>
        <SideRight>
          <Container>
            <Header>????ng k?? t??i kho???n</Header>
            <Grid>
              {/* input for identityCardNumber */}
              <InputComponent>
                <label htmlFor="identityCardNumber">
                  S??? CMND/CCCD <span>(*)</span>
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
                  placeholder="S??? CMND/CCCD"
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
                  M???t kh???u <span>(*)</span>
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
                  H??? v?? t??n <span>(*)</span>
                </label>
                <TextField
                  {...register('name')}
                  error={errors?.name ? true : false}
                  id="text"
                  label=""
                  type="text"
                  helperText={errors?.name ? errors.name.message : ''}
                  placeholder="H??? v?? t??n"
                  sx={{ width: '100%' }}
                />
              </InputComponent>

              {/* input for birthday */}
              <InputComponent>
                <label htmlFor="birthday">
                  Ng??y sinh <span>(*)</span>
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
                          placeholderText="Ng??y/Th??ng/N??m"
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
                  Gi???i t??nh <span>(*)</span>
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
                          <MenuItem value={1}>N???</MenuItem>
                          <MenuItem value={2}>Kh??c</MenuItem>
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
                  T???nh/Th??nh ph??? <span>(*)</span>
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
                  Qu???n/Huy???n <span>(*)</span>
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
                        {districts.map((district, index) => (
                          <MenuItem key={index} value={district.districtId}>
                            {district.name}
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
                  X??/Ph?????ng <span>(*)</span>
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
                Ti???p t???c
              </Button>
            </DialogActions>
          </Container>
        </SideRight>
      </Wrapper>
    </form>
  );
};

export { Register };
