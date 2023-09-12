import React, { useState } from 'react';
import './Login.css'; // Asegúrate de que la ruta sea correcta

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === 'nicolas' && password === '12345678') {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="login-container"> 
      <div className="login-form"> {/* Aplica la clase CSS "login-form" */}
        <h2>Iniciar sesión</h2>
        <form>
          <div>
            <label>Nombre de usuario:</label>
            <input type="text" value={username} onChange={handleUsernameChange} className="login-input" /> 
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={handlePasswordChange} className="login-input" /> 
          </div>
          <button type="button" onClick={handleLogin} className="primary-button"> 
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
