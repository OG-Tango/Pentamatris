import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';
import LeaderBoard from './LeaderBoard.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showComponent: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showComponent: !this.state.showComponent});
  }

  render() {
    const { showComponent } = this.state;
    const { handleClick } = this;

    return (
      <div>
        <ScoreBoard onClick={handleClick}/>
        { showComponent ? <LeaderBoard /> : null }
      </div>
    );
  }
 
};

export default App;
