
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import DevelopersPage from './pages/Developers';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import CompliancePage from './pages/Compliance';
import SupportPage from './pages/Support';
import Documentation from './pages/Documentation';

// Dashboard Layout and Pages
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Wallet from './pages/dashboard/Wallet';
import Integrations from './pages/dashboard/Integrations';
import Invoices from './pages/dashboard/Invoices';
import Exchange from './pages/dashboard/Exchange';
import Deposits from './pages/dashboard/Deposits';
import Settings from './pages/dashboard/Settings';
import Payouts from './pages/dashboard/Payouts';
import Apps from './pages/dashboard/Apps';
import Refunds from './pages/dashboard/Refunds';
import Affiliate from './pages/dashboard/Affiliate';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/docs" element={<Documentation />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="deposits" element={<Deposits />} />
            <Route path="exchange" element={<Exchange />} />
            <Route path="payouts" element={<Payouts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="apps" element={<Apps />} />
            <Route path="refunds" element={<Refunds />} />
            <Route path="affiliate" element={<Affiliate />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
