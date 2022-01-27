import { useState, useCallback } from "react";
import { randomPentamino, PENTAMINOS } from "../pentaminos";
import { STAGE_WIDTH, checkCollision } from "../helpers";

export const usePlayer = () => {
  //set default state for when page loads
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0},
    pentamino: PENTAMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    //map twice to rotate the pieces
    const rotated = matrix.map((_, index) => matrix.map(col => col[index]));

    if(dir > 0) return rotated.map(row => row.reverse());
    return rotated.reverse();
  }

  const playerRotate = (stage, dir) => {
    //create a clone of the state so we don't modify the original
    const playerClone = JSON.parse(JSON.stringify(player));
    playerClone.pentamino = rotate(playerClone.pentamino, dir);
    const position = playerClone.pos.x;
    let offset = 1;
    //create a while loop that checks for collision and makes the piece push off the
    //wall or other piece when rotating against another object
    while(checkCollision(playerClone, stage, {x: 0, y: 0})) {
      playerClone.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if(offset > playerClone.pentamino[0].length) {
        rotate(playerClone.pentamino, -dir);
        playerClone.pos.x = position;
        return;
      }
    }
    //set player state to the rotated piece
    setPlayer(playerClone);
  }


  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 3 + 1, y: 0 },
      pentamino: randomPentamino().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}