import { Routes, Route } from 'react-router-dom';
import { ForgotPassword, Login, Register, NotFound } from '../pages/Index';
export default function Router() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="ForgotPassword" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
