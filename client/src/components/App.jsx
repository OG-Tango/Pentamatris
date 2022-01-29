import React, { useState , useEffect } from 'react';
import { Login, Register} from './login/index.jsx';
import Pentamatris from './Pentamatris.jsx';

const App = () => {

  const [userActive, setUserActive] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  function handleChange(boolean) {
    setUserActive(boolean);
  }
  
  return (
    <div className="App">
        {!userLoggedIn && userActive && <Login user={userActive} onChange={handleChange}/>}
        {!userLoggedIn && !userActive && <Register user={userActive} onChange={handleChange}/>} 
        {userLoggedIn && userActive && <Pentamatris />} 
    </div>
  )
  

};



export default App;
