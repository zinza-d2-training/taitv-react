import * as React from 'react';
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Close } from '@mui/icons-material';
import { Select, MenuItem, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { IFNeedlePlace } from '../../../../interfaces/needlePlace';
import {
  updateNeedlePlaceEditing,
  needlePlaceEditingSelector,
  needlePlaceEditingItemSelector,
  updateNeedlePlaceData
} from '../../../../features/admin';
import { useAppDispatch, useAppSelector } from '../../../../redux';
interface Props {}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Container = styled.form`
  width: 444px;
  background: #ffffff;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
const DialogTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    padding: 16px 0px 16px 24px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.05px;
    color: rgba(0, 0, 0, 0.87);
  }
  & > span {
    width: 56px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & svg {
      fill: rgba(0, 0, 0, 0.54);
      width: 24px;
      height: 24px;
    }
  }
`;
const Divider = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;
const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  width: 100%;
`;
const InputComponent = styled.div`
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
  width: 100%;
  & .MuiFormControl-root {
    width: 100%;
  }
  & .MuiInputBase-root {
    width: 100%;
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
const DialogActions = styled.div`
  padding: 12px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  & button,
  & span {
    border: none;
    outline: none;
    padding: 6px 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    border-radius: 8px 8px 8px 0px;
    cursor: pointer;
  }
  & span {
    border: 1px solid #303f9f;
    color: #303f9f;
  }
  & button {
    background: #303f9f;
    color: #ffffff;
  }
`;
const needles = [
  {
    id: 1,
    name: 'Bệnh viện Đa khoa Medlatec'
  },
  {
    id: 2,
    name: 'Bệnh viện Đa khoa t123'
  }
];
const tableNumbers = [
  { id: 1, name: 1 },
  { id: 2, name: 1 },
  { id: 3, name: 1 }
];
const schema = yup
  .object({
    needlePlace: yup.string().required('Điểm tiêm không được bỏ trống'),
    address: yup.string().required('Địa chỉ không được bỏ trống'),
    host: yup.string().required('Người đứng đầu cơ sở không được bỏ trống'),
    tableNumber: yup.number().required('Số bàn tiêm không được bỏ trống')
  })
  .required();
const DialogEdit = (prop: Props) => {
  const defaultValue = useAppSelector(needlePlaceEditingItemSelector);
  const open = useAppSelector(needlePlaceEditingSelector);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid }
  } = useForm<Partial<IFNeedlePlace>>({
    resolver: yupResolver(schema),
    defaultValues: defaultValue
  });
  const close = () => dispatch(updateNeedlePlaceEditing(0));
  const onSubmit = (data: Partial<IFNeedlePlace>) => {
    dispatch(updateNeedlePlaceEditing(0));
    dispatch(updateNeedlePlaceData(data));
  };
  const dispatch = useAppDispatch();

  return (
    <div>
      <Dialog
        open={open === 0 ? false : true}
        onClose={close}
        TransitionComponent={Transition}>
        <Container onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>
            <p>Cập Nhật Điểm Tiêm</p>
            <span onClick={close}>
              <Close />
            </span>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <InputComponent>
              <label>Tên điểm tiêm</label>
              <Controller
                control={control}
                {...register('needlePlace')}
                render={({ field }) => (
                  <Select
                    {...field}
                    onChange={(event) => field.onChange(event.target.value)}>
                    {needles.map((needle) => (
                      <MenuItem key={needle.id} value={needle.name}>
                        {needle.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.needlePlace ? errors.needlePlace.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label>Địa chỉ</label>
              <TextField {...register('address')} label="" type="text" />
              <p className="input-helper">
                {errors?.address ? errors.address.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label>Người đứng đầu</label>
              <TextField {...register('host')} label="" type="text" />
              <p className="input-helper">
                {errors?.host ? errors.host.message : ''}
              </p>
            </InputComponent>
            <InputComponent>
              <label>Số bàn tiêm</label>
              <Controller
                control={control}
                {...register('tableNumber')}
                render={({ field }) => (
                  <Select
                    {...field}
                    onChange={(event) => field.onChange(event.target.value)}>
                    {tableNumbers.map((tableNumberItem) => (
                      <MenuItem
                        key={tableNumberItem.id}
                        value={tableNumberItem.name}>
                        {tableNumberItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <p className="input-helper">
                {errors?.tableNumber ? errors.tableNumber.message : ''}
              </p>
            </InputComponent>
          </DialogContent>
          <DialogActions>
            <span onClick={close}>Hủy bỏ</span>
            <button type="submit">Xác nhận</button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};
export { DialogEdit };
