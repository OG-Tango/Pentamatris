import React, { useState , useEffect } from 'react';
import { Login, Register} from './login/index.jsx';
import "../../app.scss"

const App = () => {

  const [userActive, setUserActive] = useState(true);

  function handleChange(boolean) {
    setUserActive(boolean);
  }
  
  return (
    <div className="App">
      <div className="login">
        <div className="container">
           {userActive && <Login user={userActive} onChange={handleChange}/>}
           {!userActive && <Register user={userActive} onChange={handleChange}/>}
        </div>
      </div>
    </div>
   
  );
}



export default App;
