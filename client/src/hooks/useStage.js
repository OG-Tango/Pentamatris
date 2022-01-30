import { useState, useEffect } from "react";
import { createStage } from "../helpers";
import axios from "axios";
import reviewArray from "../../../server/api/gottenReviews";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  const [previousRowCleared, setPreviousRowCleared] = useState()
  const [TotalNumberOfRowsCleared, setTotalRows] = useState();
  let starRating = 0;
  
  
  useEffect(() => {
    //initialize
    setRowsCleared(0);
    setPreviousRowCleared(0);
    setTotalRows(rowsCleared + previousRowCleared);
    
    //once row has been completed
    const clearRows = newStage => (
      newStage.reduce((accumulator, row) => {
        if(row.findIndex(cell => cell[0] === 0) === -1){
          setRowsCleared(prev => prev + 1);
          starRating+=1;
          accumulator.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          let token = localStorage.getItem('id_token');
            axios.get(`api/external/product/${starRating}`, {headers: {'authorization': token}})
            .then(review => {
              //review.rating and review.review
              console.log('REVIEW SENT BACK', review);
              reviewArray.push(review.data.review);

            })
            .catch(error => {
              console.log(error);
            });
          return accumulator;
        }
          accumulator.push(row);
          return accumulator;
        }, [])
      )
      
    //updates new stage
    const updateStage = prevStage => {
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
        );

        player.pentamino.forEach((row, y) => {
          row.forEach((value, x) => {
            if(value !== 0) {
              newStage[y + player.pos.y][x + player.pos.x] = [
                value,
                `${player.collided ? 'merged' : 'clear'}`,
              ];
            }
          });
        });

        if(player.collided) {
          resetPlayer();
          return clearRows(newStage);
        }

      return newStage;
    };

    setStage(prev => updateStage(prev));

  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};

