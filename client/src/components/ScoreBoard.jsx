import React from 'react';
import axios from 'axios';

class ScoreBoard extends React.Component {
  constructor() {
    super();

    this.state = {
      highScore: 0
    }

    this.getHighScore = this.getHighScore.bind(this);
  }

  getHighScore() {

    axios.get('/score')
      .then(score => {
        this.setState({highScore: score});
      })
      .catch(err => {
        console.log('Problem getting score', err);
      });
  }

  // componentDidMount() {
  //   this.getHighScore();
  // }

  render() {
    const { highScore } = this.state;

    return (
      <div id='score-board'>
        <h4>HIGH SCORE</h4>
        <div className='high-sc'>{highScore}</div>
        <h4>CURRENT SCORE</h4>
        <div className='game-sc'>
          accumulate score as lines are cleared
        </div>
        <button className='go-to-lb' >LEADERBOARD</button>
      </div>
    );
  }
  
};

export default ScoreBoard;