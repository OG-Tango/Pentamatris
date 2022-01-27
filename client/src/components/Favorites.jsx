import React from "react";

function Favorites(props) {
  const { faves } = props;

  return (
    <div id='faves-view'>
      <h4>Favorite Reviews</h4>
      {/* { faves.map((fave, i) => <div key={i}>{fave}</div>) } */}
      <button
        className='faves-to-revs'
      >SEE ALL REVIEWS</button>
    </div>
  );
};

export default Favorites;