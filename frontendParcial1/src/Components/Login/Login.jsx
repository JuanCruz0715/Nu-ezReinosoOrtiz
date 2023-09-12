import React, { useState } from 'react';
import './Login.css'; 

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
    if (username === 'admin' && password === '12345678') {
      console.log(username);
      console.log(password);
      window.location.href = "/Home";
    } else {
      console.log(username);
      console.log(password);
      setErrorMessage("Contraseña o usuario incorrecto");
    }
  };

  return (
    <div className="login-container"> 
      <div className="login-form"> 
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
            Play Valorant
          </button>
        </form>
      </div>
    </div>
  );
}
