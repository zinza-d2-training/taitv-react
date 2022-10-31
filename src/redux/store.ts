import { configureStore } from '@reduxjs/toolkit';
import { RegistrationVaccineReducer } from '../features/user';
import {NeedlePlaceReducer} from "../features/admin"
const store = configureStore({
  reducer: {
    registrationVaccine: RegistrationVaccineReducer,
    needlePlace: NeedlePlaceReducer
  }
});
export default store;
export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
