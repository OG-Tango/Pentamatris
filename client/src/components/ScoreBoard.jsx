import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ScoreBoard(props) {

  const { onClick, gameScore } = props;
  const [highScore, setHighScore] = useState(0);

  const getHighScore = () => {

    axios.get('/score')
      .then(res => {
        // console.log(res.data.high_score, 15);
        const score = res.data.high_score;
        setHighScore(score);
      })
      .catch(err => {
        console.log('Problem getting score', err);
      });

  };

  // useEffect(() => {
  //   getHighScore();
  // })
    
  return (
    <div id='score-board'>
      <h4>HIGH SCORE</h4>
      <div className='high-sc'>{highScore}</div>
      <h4>CURRENT SCORE</h4>
      <div className='game-sc'>{gameScore}</div>
      <button 
        className='go-to-lb' 
        onClick={onClick}
      >LEADERBOARD</button>
    
    </div>
  );
  
  
};

export default ScoreBoard;