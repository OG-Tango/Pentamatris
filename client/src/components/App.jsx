import React, { useState , useEffect } from 'react';
import { Login, Register} from './login/index.jsx';
import Pentamatris from './Pentamatris.jsx';

const App = () => {

  const [userActive, setUserActive] = useState(false);

  function handleChange(boolean) {
    setUserActive(boolean);
  }
  
  return (
    <div className="App">
        {/* {userActive && <Login user={userActive} onChange={handleChange}/>}
        {!userActive && <Register user={userActive} onChange={handleChange}/>} */}
        <Pentamatris /> 
    </div>
  )
  

};



export default App;
