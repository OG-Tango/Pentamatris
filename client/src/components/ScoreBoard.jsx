import React from 'react';
import axios from 'axios';
import LeaderBoard from './LeaderBoard.jsx';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      gameScore: 0,
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
    const { highScore, gameScore } = this.state;
    const { onClick } = this.props;

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
  }
  
};

export default ScoreBoard;