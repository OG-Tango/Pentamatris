import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LeaderBoard() {
  //render the top 5 high scores from all users in the db into each leader div
  const [topScores, settopScores] = useState([]);

  const getTopScores = () => {
    axios.get('/leaders')
      .then(() => {

      })
      .catch(err => console.log('Problem getting Top scores', err))
  }

  return (
    <div id='leader-board'>
      <h4>LEADERBOARD</h4>
      <div className='all-leaders'>
        <div className='leader'></div>
        <div className='leader'></div>
        <div className='leader'></div>
        <div className='leader'></div>
        <div className='leader'></div>
      </div>
      
    </div>
  );
};

export default LeaderBoard;