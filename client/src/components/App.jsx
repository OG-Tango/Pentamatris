import React, {useState} from 'react';
import axios from 'axios';
import Pentamatris from './Pentamatris.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import LeaderBoard from './LeaderBoard.jsx';

function App() {

  const [show, setShow] = useState(false);
  const [topScores, settopScores] = useState([]);

  const handleClick = () => {
    setShow(!show);
  };

  const getTopScores = () => {
    axios.get('/leaders')
      .then((top5) => {
        settopScores(top5.data);
      })
      .catch(err => console.log('Problem getting Top scores', err))
  };
  
  const showLeaders = () => {
    handleClick();
    getTopScores();
  };


  return (
    <div className="App">
      <Pentamatris />
      <div id='score-feat'>
        <ScoreBoard onClick={showLeaders}/>
        { show ? <LeaderBoard topScores={topScores}/> : null}
      </div> 
    </div>
  );
  
 
};

export default App;
