import React, { useState }from 'react';
import { default as loginImg } from '../images/login.svg';



export  function Login(props){

  const [state, setState] = useState({
    username: "",
    password: "",
  })

  function handleChange(evt) {
  const value = evt.target.value;
   setState({
    ...state,
    [evt.target.classList.value]: value
  });
  }

  function handleClick(event) {
    props.onChange(event.target.value)
     
    }
 
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
            <input type="username" className="username" value={state.username} onChange={handleChange} placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" value={state.password} onChange={handleChange} placeholder="password"/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type='submit 'className="btn">
          Login
        </button>
      </div>
      <div className="footer">
        <button type='button 'className="btn" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  )

}