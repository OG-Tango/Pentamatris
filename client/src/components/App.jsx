import React, { useState , useEffect } from 'react';
import { Login, Register} from './login/index.jsx';
import "../../app.scss"

const App = () => {

  const [userActive, setUserActive] = useState(true);

  
  return (
    <div className="App">
      <div className="login">
        <div className="container">
           {userActive && <Login/>}
           {!userActive && <Register/>}
        </div>
      </div>
    </div>
   
  );
}



export default App;
