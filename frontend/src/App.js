import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // URL directa del backend
  const backendUrl = 'http://localhost:5000';

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/register`, {
        email,
        password,
      });
      setMessage('Registro exitoso');
      console.log('Registro exitoso:', response.data);
    } catch (error) {
      setMessage('Error en el registro');
      console.error('Error en el registro:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/login`, {
        email,
        password,
      });
      setMessage('Inicio de sesión exitoso');
      console.log('Inicio de sesión exitoso:', response.data);
    } catch (error) {
      setMessage('Error en el inicio de sesión');
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <div className="App">
      <h1>Registro e Inicio de Sesión</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
