import React, { useState } from 'react';


const LoginForm = () => {
   const[email, setEmail] =  useState("");
   const[password, setPassword] =  useState("");
   const handleSubmit = (e) => {
       e.preventDefault();
       // You can handle form submission here
   }

  return (
    <div className="form-box">
      <h3>Welcome!</h3>
      <h4>Sign in to your account</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      {console.log(email, password)}
    </div>
  );
};

export default LoginForm;
