import React, {useState, useRef} from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import LeaderBoard from './LeaderBoard.jsx';

function App() {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      <ScoreBoard onClick={handleClick}/>
      { show ? <LeaderBoard /> : null} 
    </div>
  );
  
 
};

export default App;
