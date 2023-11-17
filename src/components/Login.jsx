import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        'credentials': 'include',
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log('User authenticated:', credentials);
        navigate("/playlists")
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2> Login </h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: "90%", padding: "2px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "90%", padding: "2px" }}
          />
        </div>
        <button type="submit" className='buttonsignup'> Login </button>
      </form>
    </div>
  );
};

export default Login;
