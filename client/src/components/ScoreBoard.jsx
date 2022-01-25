import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ScoreBoard(props) {

  const { onClick } = props;
  const [highScore, setHighScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);

  const getHighScore = () => {

    axios.get('/score')
      .then(score => {
        console.log(score, 15);
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