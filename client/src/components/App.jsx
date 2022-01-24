import React, {useState} from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import LeaderBoard from './LeaderBoard.jsx';

function App() {
  
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      <ScoreBoard onClick={handleClick}/>
      { showComponent ? <LeaderBoard /> : null }
    </div>
  );
  
 
};

export default App;
