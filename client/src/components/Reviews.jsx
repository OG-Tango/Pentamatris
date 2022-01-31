import React from "react";
import reviewArray from "../../../server/api/gottenReviews";
import axios from 'axios';


function Reviews(props) {
  const { close, swap } = props;

  const addToFavorites = (text) => {
    let token = localStorage.getItem('id_token');
    axios.post('/api/favorites', {text}, {headers: {'authorization': token}})
      .then(() => {
        console.log('SUCCESSFULLY ADDED FAVE!')
      })
      .catch(error => console.error(error))
  }

  
  const handleScroll = e => {
    const element = e.target;
    console.log(element.scrollHeight, 21)
  }

  return (
    <div id='revs-view'>
      <h4 className='view-title'>YOUR REVIEWS</h4>
      <button 
        className="close"
        onClick={close}
      >x</button>
      <ul className="rev-list" onScroll={handleScroll}>
        {
        reviewArray.map((review, i) => {
          return <li className="text" key={i} onClick={() => addToFavorites(review)}>{`${review} \n \n`}<br /><br /></li>
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