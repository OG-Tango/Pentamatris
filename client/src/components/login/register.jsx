import React, { useState } from 'react';
import { default as signUpImg }  from '../images/sign-up.svg';


export  function Register(props){

  const [state, setState] = useState({
      username: "",
      email: "",
      password: "",
  })
  function handleChange(evt) {
    const value = evt.target.value;
     setState({
      ...state,
      [evt.target.classList.value]: value
    });
  }

  return (
    <div className='base-container' ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={signUpImg}/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="username" value={state.username} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="email" value={state.email} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" value={state.password} onChange={handleChange}/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type='button 'className="btn">
          Register
        </button>
      </div>
      <div className="footer">
        <button type='button 'className="btn">
          Login
        </button>
      </div>
    </div>
  )

}