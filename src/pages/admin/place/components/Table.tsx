import { useState } from 'react';
import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../../redux/';
import {
  needlePlaceDataRemainingSelector,
  updateNeedlePlaceEditing,
  updateNeedlePlaceFilter
} from '../../../../features/admin';
type Props = {};
const TableContainer = styled.table`
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
const Table = (props: Props) => {
  const [page, setPage] = useState(5);
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const dispatch = useAppDispatch();
  const dataList = useAppSelector(needlePlaceDataRemainingSelector);
  const openDialogEdit = (data: number) => {
    dispatch(updateNeedlePlaceEditing(data));
  };
  return (
    <>
      <TableContainer>
        <tr>
          <th>STT</th>
          <th>Tên điểm tiêm</th>
          <th>Địa chỉ</th>
          <th>Người đứng đầu cơ sở tiêm chủng</th>
          <th>Số bàn tiêm</th>
        </tr>
        {dataList.map((item) => (
          <tr key={item.id} onClick={() => openDialogEdit(item.id as number)}>
            <td>{item.id}</td>
            <td>{item.needlePlace}</td>
            <td>{item.address}</td>
            <td>{item.host}</td>
            <td>{item.tableNumber}</td>
          </tr>
        ))}
      </TableContainer>
      <PaginationComponent>
        <Pagination count={10} page={page} onChange={handleChangePage} />
      </PaginationComponent>
    </>
  );
};
export { Table };
