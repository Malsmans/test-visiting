import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import { RealTimeAdminDashboard } from '../components/RealTimeAdminDashboard';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'wildafrica2024'
  };

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('admin_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setLoginError('');
      sessionStorage.setItem('admin_authenticated', 'true');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginError('');
    sessionStorage.removeItem('admin_authenticated');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <AdminLogin onLogin={handleLogin} error={loginError} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <RealTimeAdminDashboard onLogout={handleLogout} />
    </div>
  );
};

export default Admin;