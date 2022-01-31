import React, { useState } from 'react';
import { default as signUpImg }  from '../images/sign-up.svg';
import axios from 'axios';

export  function Register(props){

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUserChange(evt) {
    const value = evt.target.value;
     setUsername({username: evt.target.value});
    };

  function handleEmailChange(evt) {
    const value = evt.target.value;
      setEmail({email: evt.target.value});
    };
    
  function handlePasswordChange(evt) {
      const value = evt.target.value;
        setPassword({password: evt.target.value});
      };


  function handleClick(event) {
    props.onChange(!(event.target.value))
     
    }

  function handleSubmit(){
  
    // const { username, email, password } = state;
    axios.post('/api/register', {
      ...password,
      ...email, 
      ...username
      
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
            <input type="text" className="username" defaultValue={username} onChange={handleUserChange} placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="email" defaultValue={email} onChange={handleEmailChange} placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" defaultValue={password} onChange={handlePasswordChange} placeholder="password"/>
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