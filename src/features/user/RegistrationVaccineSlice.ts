import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFRegistrationVaccine } from '../../interfaces/steps';
import { RootStateType } from '../../redux';
const initialState: Partial<IFRegistrationVaccine> = {
  priorityId: undefined,
  healthyCardNumber: '',
  job: '',
  workingUnit: '',
  currentAddress: '',
  expectDay: undefined,
  expectDateTimeId: undefined,
  isAccept: false
};
const registrationVaccineSlice = createSlice({
  name: 'registrationVaccineSlice',
  initialState,
  reducers: {
    updateRegistrationVaccine(
      state,
      action: PayloadAction<Partial<IFRegistrationVaccine>>
    ) {
      state.priorityId = action.payload.priorityId;
      state.healthyCardNumber = action.payload.healthyCardNumber;
      state.job = action.payload.job;
      state.workingUnit = action.payload.workingUnit;
      state.currentAddress = action.payload.currentAddress;
      state.expectDay = action.payload.expectDay;
      state.expectDateTimeId = action.payload.expectDateTimeId;
    },
    toggleIsAccept(state) {
      state.isAccept = !state.isAccept;
    }
  }
});
export default registrationVaccineSlice.reducer;
export const { updateRegistrationVaccine, toggleIsAccept } =
  registrationVaccineSlice.actions;
export const registrationVaccineSelector = (state: RootStateType) =>
  state.registrationVaccine;
