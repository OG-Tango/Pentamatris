import React from "react";
import reviewArray from "../../../server/api/gottenReviews";
import axios from 'axios';


function Reviews(props) {
  const { close, swap } = props;

  const addToFavorites = (text) => {
    axios.post('/api/favorites', {text})
      .then(() => {
        console.log('SUCCESSFULLY ADDED FAVE!')
      })
      .catch(error => console.error(error))
  }

  return (
    <div id='revs-view'>
      <h4>Your Reviews</h4>
      <button 
        className="close"
        onClick={close}
      >x</button>
      <ul className="review">
        {
        reviewArray.map(review => {
          return <li onClick={() => addToFavorites(review)}>{review}</li>
          })
        }
      </ul>
      <button
        className='revs-faves'
        onClick={swap}
      >SEE FAVORITES</button>
    </div>
  );
};

export default Reviews;