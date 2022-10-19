import React from 'react';
import styled from '@emotion/styled';
import { PersonAddAlt } from '@mui/icons-material';
import {
  SvgTestimonialNeedle,
  SvgTestimonialChecked
} from '../../../access/index';
type Props = {};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Frame = styled.div`
  width: 455.33px;
  height: 100px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
`;
const FrameLeft = styled.div`
  & svg {
    width: 46px;
    height: 44px;
    fill: #281ba4;
  }
`;
const FrameRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-basis: 1;
  height: 100px;
  & .testimonial-title {
    line-height: 19px;
    font-weight: 700;
    font-size: 16px;
    color: #000;
  }
  & .testimonial-quantity {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #000;
    & i {
      font-size: 13px;
      line-height: 15.23px;
      font-weight: 500;
    }
  }
`;
const Divider = styled.div`
  width: 1px;
  height: 100px;
  background: #eeeeee;
`;
const Testimonials = (props: Props) => {
  const testimonialsStyle = {
    padding: '16px 36px 0px 36px',
    background: '#F7FBFE',
    margin: '0px -36px',
    height: '132px'
  };
  return (
    <div style={testimonialsStyle}>
      <Container>
        <Frame>
          <FrameLeft>
            <div className="testimonial-icon">
              <PersonAddAlt />
            </div>
          </FrameLeft>
          <FrameRight>
            <b className="testimonial-title">Đối tượng đăng ký tiêm</b>
            <b className="testimonial-quantity">
              11,203,873<i>(lượt)</i>
            </b>
          </FrameRight>
        </Frame>
        <Divider />

        <Frame>
          <FrameLeft>
            <div className="testimonial-icon">
              <img src={SvgTestimonialNeedle} alt="" />
            </div>
          </FrameLeft>
          <FrameRight>
            <b className="testimonial-title">Số mũi tiêm hôm qua</b>
            <b className="testimonial-quantity">
              1,762,119<i>(mũi)</i>
            </b>
          </FrameRight>
        </Frame>
        <Divider />

        <Frame>
          <FrameLeft>
            <div className="testimonial-icon">
              <img src={SvgTestimonialChecked} alt="" />
            </div>
          </FrameLeft>
          <FrameRight>
            <b className="testimonial-title">Số mũi đã tiêm toàn quốc</b>
            <b className="testimonial-quantity">
              69,523,654<i>(mũi)</i>
            </b>
          </FrameRight>
        </Frame>
      </Container>
    </div>
  );
};
export { Testimonials };
