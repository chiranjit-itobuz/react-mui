import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import { CircularProgress } from "@mui/material";

const HomePage = React.lazy(() => import("../../Pages/Home/Home"));
const LoginPage = React.lazy(() => import("../../Pages/Login/Login"));
const RegisterPage = React.lazy(() => import('../../Pages/Register/Register'));
const ForgotPassword = React.lazy(() => import('../../Pages/ForgotPassword/ForgotPassword'));
const VerifyCodePage = React.lazy(() => import('../../Pages/VerifyCode/VerifyCode'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.login.path} element={<LoginPage />} />
        <Route path={routes.register.path} element={<RegisterPage />} />
        <Route path={routes.forgotPassword.path} element={<ForgotPassword />} />
        <Route path={routes.verifyCode.path} element={<VerifyCodePage />} />
      </Routes>
    </Suspense>
  );
}
