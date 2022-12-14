import { useState } from 'react';
import styled from '@emotion/styled';

import { Select, MenuItem, Pagination } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SvgSearchIcon } from '../../../access/index';

import { fakeNeedlePlace } from '../../../fake/needlePlace';
type Props = {};
const Container = styled.div`
  padding: 0px 12px;
  border: 1px solid rgba(38, 56, 150, 0.14);
  box-shadow: 0px 4px 12px rgba(34, 41, 47, 0.12);
  border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
  padding: 16px 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  height: 55px;
`;
const LocationController = styled.div`
  padding-bottom: 16px;
  width: 100%;
  display: flex;
  gap: 16px;
  & form {
    width: 100%;
  }
`;
const InputComponent = styled.div`
  & label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 5px;
  }
  & .MuiSelect-select {
    width: 260px;
    padding: 0px !important;
    height: 40px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    align-items: center;
    padding-left: 8px !important;
  }
  & .MuiOutlinedInput-notchedOutline {
    padding: 0px;
    border: 1px solid #c4c4c4;
  }
  & .MuiSvgIcon-root {
    font-size: 25px;
  }
  & .input-helper {
    font-weight: 400;
    font-size: 12px;
    line-height: 23px;
    color: #d32f2f;
  }
`;
const Button = styled.button`
  border-radius: 8px 8px 8px 0px;
  position: relative;
  top: 29px;
  border: none;
  outline: none;
  background-color: #171a88;
  padding: 8px 16px;
  width: 148px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  & img {
    width: 17.5px;
    height: 17.5px;
    fill: #ffffff;
  }
  & span {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;
const PaginationComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 0px;
  & * {
    font-size: 14px !important;
  }
  & .Mui-selected {
    background-color: rgb(45, 33, 136) !important;
    color: #ffffff !important;
  }
`;
const Table = styled.table`
  height: 509.79px;
  width: 100%;
  border-collapse: collapse;
  & td {
    line-height: 44px;
    text-align: center;
    padding: 0px 4px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: -0.04px;
  }
  & th {
    text-align: center;
    padding: 0px 4px;
    line-height: 48px;
    font-weight: 500;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    letter-spacing: -0.04px;
  }
  & tr:nth-child(even) {
    background: rgba(238, 238, 238, 0.4);
  }
  & tr {
    border-top: 2px solid #eeeeee;
  }
`;
const hospitals = [
  { name: 'B???nh vi???n ??a khoa Medlatec1', hospitalId: 1 },
  { name: 'B???nh vi???n ??a khoa Medlatec2', hospitalId: 2 },
  { name: 'B???nh vi???n ??a khoa Medlatec3', hospitalId: 3 },
  { name: 'B???nh vi???n ??a khoa Medlatec4', hospitalId: 4 }
];
const addresses = [
  { name: '42-44 Ngh??a D??ng', addressId: 1 },
  { name: '41-44 Ngh??a D??ng', addressId: 2 },
  { name: '40-44 Ngh??a D??ng', addressId: 3 },
  { name: '39-44 Ngh??a D??ng', addressId: 4 }
];
interface IFormData {
  hospitalId: number;
  addressId: number;
}
const schema = yup
  .object({
    hospitalId: yup.number().required('??i???m ti??m kh??ng ???????c b??? tr???ng'),
    addressId: yup.number().required('?????a ch??? kh??ng ???????c b??? tr???ng')
  })
  .required();
const Location = (props: Props) => {
  const [page, setPage] = useState(5);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const locationStyle = {
    marginTop: '39px',
    marginBottom: '39px'
  };
  return (
    <div style={locationStyle}>
      <Container>
        <Title>Tra c???u ??i???m ti??m theo ?????a b??n</Title>
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <LocationController>
            <InputComponent>
              <Controller
                {...register('hospitalId')}
                control={control}
                render={({ field }) => (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="hospitalId">??i???m ti??m</label>
                    <Select
                      id="hospitalId"
                      {...field}
                      onChange={(event) => {
                        field.onChange(Number(event.target.value));
                      }}>
                      {hospitals.map((hospital) => (
                        <MenuItem
                          key={hospital.hospitalId}
                          value={hospital.hospitalId}>
                          {hospital.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <p className="input-helper">
                      {errors?.hospitalId ? errors.hospitalId.message : ''}
                    </p>
                  </div>
                )}
              />
            </InputComponent>
            <InputComponent>
              <Controller
                {...register('addressId')}
                control={control}
                render={({ field }) => (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="addressId">?????a ch???</label>
                    <Select
                      id="addressId"
                      {...field}
                      onChange={(event) => {
                        field.onChange(Number(event.target.value));
                      }}>
                      {addresses.map((address) => (
                        <MenuItem
                          key={address.addressId}
                          value={address.addressId}>
                          {address.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <p className="input-helper">
                      {errors?.addressId ? errors.addressId.message : ''}
                    </p>
                  </div>
                )}
              />
            </InputComponent>
            <Button type="submit">
              <img src={SvgSearchIcon} alt="" />
              <span>T??m Ki???m</span>
            </Button>
          </LocationController>
        </form>
        <Table>
          <tr>
            <th>STT</th>
            <th>T??n ??i???m ti??m</th>
            <th>?????a ch???</th>
            <th>Ng?????i ?????ng ?????u c?? s??? ti??m ch???ng</th>
            <th>S??? b??n ti??m</th>
          </tr>
          {fakeNeedlePlace.map((placeItem) => (
            <tr key={placeItem.id}>
              <td>{placeItem.id}</td>
              <td>{placeItem.needlePlace}</td>
              <td>{placeItem.address}</td>
              <td>{placeItem.host}</td>
              <td>{placeItem.tableNumber}</td>
            </tr>
          ))}
        </Table>
        <PaginationComponent>
          <Pagination count={10} page={page} onChange={handleChangePage} />
        </PaginationComponent>
      </Container>
    </div>
  );
};
export { Location };
