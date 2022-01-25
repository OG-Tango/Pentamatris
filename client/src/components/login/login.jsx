import React, { useState } from 'react';
import { default as loginImg } from '../images/login.svg';



export  function Login(){
  

  return (
    <div className='base-container'>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg}/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" placeholder='password'/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type='button 'className="btn">
          Login
        </button>
      </div>
    </div>
  )

}