export const STAGE_WIDTH = 15;
export const STAGE_HEIGHT = 25;

export const NEXT_PIECE_HEIGHT = 5;
export const NEXT_PIECE_WIDTH = 5;

export const createStage = () => 
  Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
  for(let y = 0; y < player.pentamino.length; y++) {
    for(let x = 0; x < player.pentamino[y].length; x++) {
      if(player.pentamino[y][x] !== 0) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !=='clear'
        ) return true;
    }
  }
 }
}

export const createNextPieceBox = () =>
  Array.from(Array(NEXT_PIECE_HEIGHT), () =>
    new Array(NEXT_PIECE_WIDTH).fill([0, 'clear'])
  )

