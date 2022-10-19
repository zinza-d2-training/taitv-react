import { Routes, Route } from 'react-router-dom';
import {
  ForgotPassword,
  Login,
  Register,
  NotFound,
  Home
} from '../pages/Index';
import { Template } from '../components/common';
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
