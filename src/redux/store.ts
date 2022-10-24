import { configureStore } from '@reduxjs/toolkit';
import { RegistrationVaccineReducer } from '../features/user';
const store = configureStore({
  reducer: {
    registrationVaccine: RegistrationVaccineReducer
  }
});
export default store;
export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
