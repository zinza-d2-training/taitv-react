import React from 'react';
import styled from '@emotion/styled';
import { Stepper, Step, StepLabel } from '@mui/material';
import { steps } from '../../../fake/steps';
type Props = {
  active: number;
  completed: Array<Number>;
};
const Container = styled.div`
  height: 56px;
  padding-top: 8px;
  & svg {
    width: 20px !important;
    height: 20px !important;
  }
  & svg.Mui-active {
    color: #1976d2 !important;
  }
  & text.MuiStepIcon-text {
    font-size: 12px !important;
    font-family: 'Roboto';
  }
  & .MuiStepLabel-label {
    margin-top: 0px;
  }
  & .MuiStepLabel-labelContainer {
    margin-top: 6px;
    & span {
      margin-top: 0px;
    }
  }
  & .MuiStepLabel-label {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400 !important;
    color: rgba(0, 0, 0, 0.87) !important;
    font-family: 'Roboto';
  }
`;
const Steps = (props: Props) => {
  return (
    <Container>
      <Stepper alternativeLabel>
        {steps.map((step) => (
          <Step
            completed={props.completed.includes(step.idStep)}
            active={step.idStep === props.active ? true : false}
            key={step.idStep}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};
export { Steps };
