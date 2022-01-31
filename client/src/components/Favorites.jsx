import React from "react";

function Favorites(props) {
  const { faves, close, swap } = props;

  const handleScroll = e => {
    const element = e.target;
    console.log(element.scrollHeight, 21)
  }

  return (
    <div id='faves-view'>
      <h4 className='view-title'>FAVORITE REVIEWS</h4>
      <ul className="rev-list" onScroll={handleScroll}>
        { faves.map((fave, i) => <li className="text" key={i}>{`${fave} \n \n`}<br /><br /></li>) }
      </ul>
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