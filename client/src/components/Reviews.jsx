import React from "react";

function Reviews(props) {
  const { close, swap } = props;

  return (
    <div id='revs-view'>
      <h4>Your Reviews</h4>
      <button 
        className="close"
        onClick={close}
      >x</button>
      <button 
        className='revs-faves'
        onClick={swap}
      >SEE FAVORITES</button>
    </div>
  );
};

export default Reviews;