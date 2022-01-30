import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ScoreBoard(props) {

  const { onClick, score } = props;
  const [highScore, setHighScore] = useState(0);

  const getHighScore = () => {
    const token = localStorage.getItem('id_token');
    axios.get('/api/score', {headers: token})
      .then(res => {
        // console.log(res.data.high_score, 15);
        const databaseScore = res.data.high_score;
        setHighScore(databaseScore);
      })
      .catch(err => {
        console.log('Problem getting score', err);
      });

  };

  useEffect(() => {
    getHighScore();
  })
    
  return (
    <div id='score-board'>
      <h6>HIGH SCORE</h6>
      <div className='high-sc'>{highScore}</div>
      <h6>CURRENT SCORE</h6>
      <div className='game-sc'>{score}</div>
      <button 
        className='go-to-lb' 
        onClick={onClick}
      >LEADERBOARD</button>
    
    </div>
  );
  
  
};

export default ScoreBoard;