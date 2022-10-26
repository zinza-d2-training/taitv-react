import React from 'react';
import styled from '@emotion/styled';
type Props = {};
const Container = styled.div`
  width: 100%;
  padding: 0px 8px;
`;
const Table = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
`;
const TableRow = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0px;
  ${(props: { isHead?: boolean }) =>
    props?.isHead
      ? `
    height: 74px;
    background: rgba(238, 238, 238, 0.4);
    line-height: 24px;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 2px solid #eeeeee;
  `
      : `
    height: 48px;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
  `};
  letter-spacing: -0.04px;
  color: rgba(0, 0, 0, 0.87);
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    text-align: center;
    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px 0px;
      background: #e8eaf6;
      border: 1px solid #3f51b5;
      border-radius: 30px;
      width: 100%;
    }
  }
  & > div:not(:first-child) {
    flex-grow: 1;
    width: calc((100% - 80px) / 5);
  }
  & > div:first-child {
    width: 80px;
  }
`;
const RegistrationResult = (props: Props) => {
  return (
    <Container>
      <Table>
        <TableRow isHead>
          <div>STT</div>
          <div>Họ và tên</div>
          <div>Ngày sinh </div>
          <div>Giới tính</div>
          <div>Số CMND/CCCD/Mã định danh công dân</div>
          <div>Trạng thái</div>
        </TableRow>
        <TableRow>
          <div>1</div>
          <div>Nguyễn Văn A</div>
          <div>6/10/1994</div>
          <div>Nam</div>
          <div>030012345678</div>
          <div>
            <span>Đăng ký thành công</span>
          </div>
        </TableRow>
      </Table>
    </Container>
  );
};
export { RegistrationResult };
