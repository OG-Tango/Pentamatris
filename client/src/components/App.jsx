import React, { useState , useEffect } from 'react';
import { Login, Register} from './login/index.jsx';
import Pentamatris from './Pentamatris.jsx';

const App = () => {

  const [userActive, setUserActive] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleChange(boolean) {
    setUserActive(boolean);
  }
  
  function handleLogIn(boolean){
    setUserLoggedIn(boolean);
  }
  return (
    <div className="App">
        {!userLoggedIn && userActive && <Login user={userActive} loggedIn={userLoggedIn} onChange={handleChange} handleLogIn={handleLogIn}/>}
        {!userLoggedIn && !userActive && <Register user={userActive} loggedIn={userLoggedIn} onChange={handleChange}/>} 
        {userLoggedIn && userActive && <Pentamatris user={userActive} loggedIn={userLoggedIn} handleLogIn={handleLogIn}/>} 
    </div>
  )
  

};



export default App;
