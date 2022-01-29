import React, { useState }from 'react';
import { default as loginImg } from '../images/login.svg';
import axios from 'axios';



export  function Login(props){

  const [state, setState] = useState({
    password: "",
    email: "",
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

  function handleSubmit(){
    
      const { email, password } = state;
      axios.post('/api/login', {
        password: password,
        email: email, 
        
      })
       .then(res => {
        console.log('id_token', res.headers.authorization);
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
            <input type="email" className="email" defaultValue={state.email} onChange={handleChange} placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="password" defaultValue={state.password} onChange={handleChange} placeholder="password"/>
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