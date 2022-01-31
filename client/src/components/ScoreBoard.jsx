import React, {useState, useEffect} from 'react';
import axios from 'axios';


function ScoreBoard(props) {

  const { onClick, score, highScore } = props;

  return (
    <div id='score-board'>
      <h5 className='sc-title'>HIGH SCORE</h5>
      <div className='high-sc'>{highScore}</div>
      <h5 className='sc-title'>CURRENT SCORE</h5>
      <div className='game-sc'>{score}</div>
      <button 
        className='go-to-lb' 
        onClick={onClick}
      >LEADERBOARD</button>
    
    </div>
  );
  
  
};

export default ScoreBoard;