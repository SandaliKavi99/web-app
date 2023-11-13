import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { AuthProvider } from './appContexts';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );

}

