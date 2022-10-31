import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import {
  needlePlaceFilterSelector,
  updateNeedlePlaceFilter
} from '../../../../features/admin';
import { SvgSearchIcon } from '../../../../access';
import type { IFNeedlePlace } from '../../../../interfaces/needlePlace';
const Container = styled.form`
  width: 100%;
  display: flex;
  gap: 16px;
`;
const InputComponent = styled.div`
  ${(props: { fullWidth?: boolean }) =>
    !!props?.fullWidth ? `width: 100%` : 'width: 260px'};
  & .MuiInputBase-root {
    width: 260px;
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
const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: #171a88;
  border-radius: 8px 8px 8px 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0px 16px;
  & > span {
    display: block;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
  & > img {
    width: 24px;
    height: 24px;
  }
`;
type Props = {};
const schema = yup.object({
  needlePlace: yup.string(),
  address: yup.string()
});
const FormSearch = (props: Props) => {
  const defaultValue = useAppSelector(needlePlaceFilterSelector);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<Partial<IFNeedlePlace>>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: Partial<IFNeedlePlace>) => {
    dispatch(updateNeedlePlaceFilter(data));
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputComponent>
        <TextField
          {...register('needlePlace')}
          label=""
          type="text"
          placeholder="Điểm tiêm"
        />
      </InputComponent>
      <InputComponent>
        <TextField
          {...register('address')}
          label=""
          type="text"
          placeholder="Địa chỉ"
        />
      </InputComponent>
      <Button>
        <img src={SvgSearchIcon} alt="" />
        <span>Tìm kiếm</span>
      </Button>
    </Container>
  );
};
export { FormSearch };
