import React from 'react';
import { default as loginImg } from '../images/login.svg';



export  function Login(props){
 
  return (
    <div className='base-container' ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg}/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="name" className="name" placeholder='name'/>
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
      <div className="footer">
        <button type='button 'className="btn">
          Register
        </button>
      </div>
    </div>
  )

}