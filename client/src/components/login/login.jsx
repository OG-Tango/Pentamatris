import React, { useState }from 'react';
import { default as loginImg } from '../images/login.svg';
import axios from 'axios';



export  function Login(props){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePasswordChange(evt) {
    const value = evt.target.value;
     setPassword({
     password: evt.target.value
    });
  }

  function handleEmailChange(evt) {
    const value = evt.target.value;
    setEmail({
    email: evt.target.value
   });
  }

  function handleClick(event) {
    props.onChange(event.target.value)
     
    }

  function handleSubmit(){
    
      axios.post('/api/login', {
        ...password,
        ...email, 
        
      })
       .then(res => {
        localStorage.setItem('id_token', res.headers.authorization);
        if(res.headers.authorization !== undefined){
          props.handleLogIn(true)
        }
       })
       .catch(err => console.error(err));
      
    }
 
  return (
    <div className='base-container'>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg}/>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="email" defaultValue={email} onChange={handleEmailChange} placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" defaultValue={password} onChange={handlePasswordChange} placeholder="password"/>
          </div>
        </form>
      </div>
      <div className="footer">
        <button type='submit 'className="btn"  onClick={handleSubmit} action="/login" method = 'POST'>
          Login
        </button>
      </div>
      <div className="footer">
        <button type='button 'className="btn" onClick={handleClick} >
          Register
        </button>
      </div>
    </div>
  )

}