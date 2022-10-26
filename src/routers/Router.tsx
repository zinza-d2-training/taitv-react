import { Routes, Route } from 'react-router-dom';
import {
  ForgotPassword,
  Login,
  Register,
  NotFound,
  Home
} from '../pages/Index';
import { Template } from '../components/common';
import { DangKyTiem, Step1, Step2, Step3 } from '../pages/dangKyTiem/Index';
import {
  Account,
  RegistrationResult,
  VaccinationCertificate,
  User
} from '../pages/user';
export default function Router() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="ForgotPassword" element={<ForgotPassword />} />
      <Route
        path="trang-chu"
        element={
          <Template>
            <Home />
          </Template>
        }
      />
      <Route
        path=""
        element={
          <Template>
            <Home />
          </Template>
        }
      />
      <Route
        path="dang-ky-tiem"
        element={
          <Template>
            <DangKyTiem />
          </Template>
        }>
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
      </Route>
      <Route
        path="user"
        element={
          <Template>
            <User />
          </Template>
        }>
        <Route
          path="vaccination-certificate"
          element={<VaccinationCertificate />}
        />
        <Route path="registration-result" element={<RegistrationResult />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
