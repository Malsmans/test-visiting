import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Admin credentials - in production, this should be handled securely on the backend
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'wildafrica2024'
  };

  const handleLogin = (username: string, password: string) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginError('');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} error={loginError} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default Admin;