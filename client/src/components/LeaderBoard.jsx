import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LeaderBoard(props) {
  //render the top 5 high scores from all users in the db into each leader div
  const { topScores, close } = props;

  return (
    <div id='leader-board'>
      <h4 className='view-title'>LEADERBOARD</h4>
      <button 
        className='close'
        onClick={close}
      >x</button>
      <div className='all-leaders'>
        <div className='leader'>
          { topScores[0] ? `${topScores[0].username}   ${topScores[0].high_score}` : null }
        </div>
        <div className='leader'>
          { topScores[1] ? `${topScores[1].username}   ${topScores[1].high_score}` : null }
        </div>
        <div className='leader'>
          { topScores[2] ? `${topScores[2].username}   ${topScores[2].high_score}` : null }
        </div>
        <div className='leader'>
          { topScores[3] ? `${topScores[3].username}   ${topScores[3].high_score}` : null }
        </div>
        <div className='leader'>
          { topScores[4] ? `${topScores[4].username}   ${topScores[4].high_score}` : null }
        </div>
      </div>
      
    </div>
  );
};

export default LeaderBoard;