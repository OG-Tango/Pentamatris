import React, { useState } from 'react';
import { default as signUpImg }  from '../images/sign-up.svg';
import axios from 'axios';

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

  function handleClick(event) {
    props.onChange(!(event.target.value))
     
    }

  function handleSubmit(){
  
    const { username, email, password } = state;
    axios.post('/api/register', {
      password: password,
      email: email, 
      username: username
      
    })
     .then(res => {
       props.onChange(true);
     })
     .catch(err => console.error(err));
    
  }
  

  return (
    <div className='base-container'>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={signUpImg}/>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="username" defaultValue={state.username} onChange={handleChange} placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="email" defaultValue={state.email} onChange={handleChange} placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" defaultValue={state.password} onChange={handleChange} placeholder="password"/>
          </div>
        </form>
      </div>
      <div className="footer" >
        <button type='submit 'className="btn" onClick={handleSubmit} action="/api/register" method = 'POST' >
          Register
        </button>
      </div>
      <div className="footer">
        <button type='button 'className="btn" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  )

}