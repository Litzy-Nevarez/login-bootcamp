import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Mensajes from './pages/mensajes';
import Amigos from './pages/amigos';
import Settings from './pages/settings';
import Layout from './pages/layout'; // Importamos el Layout

function App() {
  return (
      <div className="App">
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/" element={<Login />} />

          {/* Rutas protegidas (restringidas al usuario logueado) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/amigos" element={<Amigos />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
