import { useState, useEffect, useCallback } from "react";


export const useGameStatus = rowsCleared => {
  const[score, setScore] = useState(0);
  const[rows, setRows] = useState(0);
  const[level, setLevel] = useState(0);

  //deem standard points for how many lines cleared
  const points = [50, 120, 350, 1250, 2500];
  //function that calculates the score based on level and lines cleared
  const calculateScore = useCallback(() => {
    if(rowsCleared > 0) {
      setScore(prev => prev + points[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, points, rowsCleared]);

  //built in react method
  useEffect(() => {
    calculateScore();
  }, [calculateScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel]
}