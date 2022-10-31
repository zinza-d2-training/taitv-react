import { Routes, Route } from 'react-router-dom';
import {
  ForgotPassword,
  Login,
  Register,
  NotFound,
  Home
} from '../pages/Index';
import { Template } from '../components/common';
import {
  DangKyTiem,
  Step1 as DangKyTiemStep1,
  Step2 as DangKyTiemStep2,
  Step3 as DangKyTiemStep3
} from '../pages/dangKyTiem/Index';
import {
  Account as UserAccount,
  RegistrationResult as UserRegistrationResult,
  VaccinationCertificate as UserVaccinationCertificate,
  User
} from '../pages/user';
import {
  Admin,
  Place as AdminPlace,
  Register as AdminRegister,
  Document as AdminDocument
} from '../pages/admin';
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
        <Route path="step1" element={<DangKyTiemStep1 />} />
        <Route path="step2" element={<DangKyTiemStep2 />} />
        <Route path="step3" element={<DangKyTiemStep3 />} />
      </Route>
      <Route
        path="user"
        element={
          <Template>
            <User />
          </Template>
        }>
        <Route index element={<UserAccount />} />
        <Route
          path="vaccination-certificate"
          element={<UserVaccinationCertificate />}
        />
        <Route
          path="registration-result"
          element={<UserRegistrationResult />}
        />
        <Route path="account" element={<UserAccount />} />
      </Route>
      <Route
        path="admin"
        element={
          <Template>
            <Admin />
          </Template>
        }>
        <Route index element={<AdminPlace />}></Route>
        <Route path="place" element={<AdminPlace />}></Route>
        <Route path="register" element={<AdminRegister />}></Route>
        <Route path="document" element={<AdminDocument />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
