import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import LoginForm from './components/login/Login';
import HomePage from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default App;
