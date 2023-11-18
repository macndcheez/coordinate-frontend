import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("User registered:", newUser);
        navigate("/");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div  style={{ textAlign: "center", padding: "20px" }}>
      <h2> Sign Up </h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <div className='form-titles' style={{ marginBottom: "10px" }}>
          <label htmlFor="name"> Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            style={{ width: "90%", padding: "2px" }}
          />
        </div>
        <div className='form-titles' style={{ marginBottom: "10px" }}>
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={{ width: "90%", padding: "2px" }}
          />
        </div>
        <div className='form-titles' style={{ marginBottom: "10px" }}>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: "90%", padding: "2px" }}
          />
        </div>
        <button 
          type="submit" className="buttonsignup form-titles" >
          {" "}
          Sign Up{" "}
        </button>
      </form>
      
    </div>
  );
};

export default Signup;
