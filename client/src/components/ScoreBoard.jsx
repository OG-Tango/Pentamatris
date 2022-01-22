import React from 'react';

const ScoreBoard = () => {
  return (
    <div id='score-board'>
      <div className='high-sc'>
        <h4>HIGH SCORE</h4>
        get user high-score from db here
      </div>
      <div className='game-sc'>
        <h4>CURRENT SCORE</h4>
        accumulate score as lines are cleared
      </div>
      <button>LEADERBOARD</button>
    </div>
  );
};

export default ScoreBoard;