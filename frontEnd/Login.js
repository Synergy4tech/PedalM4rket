import React, { usuario } from 'react';
import { usuarioHistorico } from 'react-router-dom';
import { login } from '../services/api';

function LoginPage() {
  const [username, setUsername] = usuario('');
  const [password, setPassword] = usuario('');
  const history = usuarioHistorico();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      history.push('/');
    } catch (error) {
      console.error('Login incorreto', error);
      
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
