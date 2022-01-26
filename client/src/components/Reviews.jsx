import React from "react";

function Reviews(props) {
  const { onClick } = props;

  return (
    <div id='review-sm'>
      <h6>Reviews</h6>

      <button 
      className='go-to-faves'
      onClick={onClick}
      >FAVORITES</button>
    </div>
  );
};

export default Reviews;