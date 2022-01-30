import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ScoreBoard(props) {

  const { onClick, score, highScore } = props;

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