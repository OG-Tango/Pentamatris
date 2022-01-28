import React from "react";

function Favorites(props) {
  const { faves, close, swap } = props;

  return (
    <div id='faves-view'>
      <h4>Favorite Reviews</h4>
      {/* { faves.map((fave, i) => <div key={i}>{fave}</div>) } */}
      <button 
        className="close"
        onClick={close}
      >x</button>
      <button
        className='revs-faves'
        onClick={swap}
      >SEE ALL REVIEWS</button>
    </div>
  );
};

export default Favorites;