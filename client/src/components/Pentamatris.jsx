import React, { useState } from "react";
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

const Pentamatris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y: 0})){
      updatePlayerPos({ x: dir, y: 0});
    }
  }

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setLevel(0);
  }

  const drop = () => {

    if(rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }
    if(!checkCollision(player, stage, {x: 0, y: 1})) {
      updatePlayerPos({ x: 0, y: 1, collided: false})
    } else {
      if(player.pos.y < 1) {
        console.log("GameOver");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

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
      if(keyCode === 65) {
        movePlayer(-1);
      } else if(keyCode === 68) {
        movePlayer(+1);
      } else if(keyCode === 83) {
        dropPlayer();
      } else if(keyCode === 87) {
        playerRotate(stage, 1);
      }
    }
  }

  const pauseGame = () => {

  }

  useInterval(() => {
    drop();
  }, dropTime)


  return (
    <StyledPentamatrisWrapper role="button" tabIndex="0" onKeyDown={event => move(event)} onKeyUp={keyUp}>
      <StyledPentamatris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (<Display gameOver={gameOver} text="gameOver" />) : (
            <div>
            {/* <NextPiece /> */}
            <Display text={`Score: ${score}`} />
            <Display text="Reviews"/>
          </div>
          )}
          <StyledStart callback={startGame} />
        </aside>
      </StyledPentamatris>
    </StyledPentamatrisWrapper>
  )
}

export default Pentamatris;