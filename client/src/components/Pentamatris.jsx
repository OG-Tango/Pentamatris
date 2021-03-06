import React, { useState, useEffect } from "react";
import axios from 'axios';
import { createStage, checkCollision } from "../helpers.js";
import { usePlayer } from "../hooks/usePlayer.js";
import { useStage } from "../hooks/useStage.js";
import Stage from "./Stage.jsx";
import Display from "./Display.jsx";
import { StyledStart } from "./styles/StyledStart.js";
import Start from "./Start.jsx";
import { useInterval } from "../hooks/useInterval.js";
import NextPiece from "./NextPiece.jsx";
import { StyledPentamatrisWrapper, StyledPentamatris } from "./styles/StyledPentamatris.js";
import { useGameStatus } from "../hooks/useGameStatus.js";
import ScoreBoard from './ScoreBoard.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import Reviews from './Reviews.jsx';
import Favorites from "./Favorites.jsx";
import ReviewTicker from "./Ticker.jsx";
import LogOut  from "./logOut.jsx"


const Pentamatris = (props) => {
  //state for how quickly pieces fall
  const [dropTime, setDropTime] = useState(null);
  //state for if the game is over
  const [gameOver, setGameOver] = useState(false);

  //the player state that controls where the piece is on the board
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();

  //the stage state for how the current condition of the board
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  //state for the current score and unshown values for level and rows cleared
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const [showLeaders, setShowLeaders] = useState(false);
  const [showFaves, setShowFaves] = useState(false);
  const [showRevs, setShowRevs] = useState(false);
  const [topScores, settopScores] = useState([]);
  const [faves, setFaves] = useState([]);
  const [highScore, setHighScore] = useState(0);

  //function that checks if the player can move by checking collision with walls and other pieces
  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y: 0})){
      updatePlayerPos({ x: dir, y: 0});
    }
  }

  //function to start the game at initial values
  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setLevel(0);
  }

  const checkHighScore = (isOver = gameOver) => {
    if(isOver) {
      console.log(score, isOver, "TEST SCORE UPDATE")
      if(score > highScore ) {
        let token = localStorage.getItem('id_token');
        axios.put('/api/score', {high_score: score}, {headers: {'authorization': token}})
        .then((score) => {
          console.log(score, 67);
          setHighScore(score);
        })
        .catch(error => {
          console.error(error);
        })
      }
    }
  }

  

  //drop function
  const drop = () => {
    //set game speed dependent on level
    if(rows > (level + 1) * 10) {
      //increase the level
      setLevel(prev => prev + 1);
      //increase drop speed
      setDropTime(1000 / (level + 1) + 200);
    }
    //check for collision each drop
    //if no collision, piece moves down
    if(!checkCollision(player, stage, {x: 0, y: 1})) {
      updatePlayerPos({ x: 0, y: 1, collided: false})
    } else {
      //if piece hits the top of the stage, game over
      if(player.pos.y < 1) {
        console.log("GameOver");
        setGameOver(true);
        checkHighScore(true);
        setDropTime(null);
      }
      //set collided to true when piece eventually collides with bottom or other piece
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  //function that resumes fall speed when down key is released
  const keyUp =({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 83) {
        setDropTime(1000 / (level + 1) + 200)
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  }

  const move = ({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 65) { //A Key
        movePlayer(-1);
      } else if(keyCode === 68) { //D Key
        movePlayer(+1);
      } else if(keyCode === 83) { //S Key
        dropPlayer();
      } else if(keyCode === 87) { //W Key
        playerRotate(stage, 1);
      }
    }
  }
  //implement pause later if there is time
  // const pauseGame = () => {

  // }

  useInterval(() => {
    drop();
  }, dropTime)

  //axios request functions
  let token = localStorage.getItem('id_token');

  const getHighScore = () => {
    axios.get('/api/score', {headers: {'authorization': token}})
      .then(res => {
        // console.log(res.data.high_score, 15);
        let databaseScore = res.data.high_score;
        if(databaseScore === null) {
          databaseScore = 0;
        }
        setHighScore(databaseScore);
      })
      .catch(err => {
        console.log('Problem getting score', err);
      });

  };

  useEffect(() => {
    getHighScore();
  })

  const getTopScores = () => {
    axios.get('/api/leaders', {headers: {'authorization': token}} )
    .then((top5) => {
      settopScores(top5.data);
    })
    .catch(err => console.log('Problem getting Top scores', err));
  };
  
  const getFavorites = () => {
    axios.get('/api/favorites', {headers: {'authorization': token}} )
    .then((faves) => {
      
      setFaves(faves.data);
      console.log(faves, 124);
    })
    .catch(err => console.log('Problem getting Favorite Reviews', err));
  }
  
  //toggle component functions

  const handleScoresClick = () => {
    setShowLeaders(!showLeaders);
    setShowFaves(false);
    setShowRevs(false);
  };

  const handleFavesClick = () => {
    setShowFaves(!showFaves);
    setShowRevs(false);
    setShowLeaders(false);
  };

  const handleRevsClick = () => {
    setShowRevs(!showRevs);
    setShowLeaders(false);
    setShowFaves(false);
  };

  const showLeaderBoard = () => {
    handleScoresClick();
    getTopScores();
  };

  const showFavorites = () => {
    handleFavesClick();
    getFavorites();
  };

  const closeLeaders = () => {
    setShowLeaders(false);
  };

  const closeFaves = () => {
    setShowFaves(false);
  };

  const closeReviews = () => {
    setShowRevs(false);
  };

  const revsToFaves = () => {
    setShowRevs(!showRevs);
    setShowFaves(!showFaves);
  };


  return (

    <StyledPentamatrisWrapper role="button" tabIndex="0" onKeyDown={event => move(event)} onKeyUp={keyUp}>
      <ReviewTicker />
      <StyledPentamatris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (<Display gameOver={gameOver} text="gameOver" />) : (
            <div>
            <ScoreBoard onClick={showLeaderBoard} highScore={highScore} score={score}/>
            <button 
              className='go-to-revs'
              onClick={handleRevsClick}
            >SEE REVIEWS</button>
            <button
              className='go-to-faves'
              onClick={showFavorites}
            >SEE FAVORITES</button>
          </div>
          )}
          <StyledStart callback={startGame} />
          <LogOut logOut={props}/>
          { showLeaders ? <LeaderBoard topScores={topScores} close={closeLeaders}/> : null}
          { showRevs ? <Reviews close={closeReviews} swap={revsToFaves}/> : null }
          { showFaves ? <Favorites faves={faves} close={closeFaves} swap={revsToFaves}/> : null }
        </aside>
      </StyledPentamatris>
    </StyledPentamatrisWrapper>
  )
}

export default Pentamatris;