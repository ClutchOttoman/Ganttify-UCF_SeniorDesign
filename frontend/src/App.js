import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import RegisterPage from './pages/RegisterPage';
import AboutUsPage from './pages/AboutUsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import DashboardPage from './pages/DashboardPage';
import DashboardChartsPage from './pages/DashboardChartsPage';
import RecentlyDeletedPage from './pages/RecentlyDeletedPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
          <Route path="/verify-email/:email/:token" element={<VerifyEmailPage />} />
          <Route path="/dashboard/charts" element={<DashboardChartsPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/dashboard/recently-deleted" element={<RecentlyDeletedPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
