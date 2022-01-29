import Marquee from "react-fast-marquee";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ReviewTicker = () => {
  const [global, setGlobal] = useState([]);

  const getGlobalFaves = () => {
    axios.get('api/global')
      .then((faves) => {
        // console.log(faves.data, 11)
        setGlobal(faves.data);
      })
      .catch(err => console.log('Problem getting global faves', err));

  };

  useEffect(() => {
    getGlobalFaves();
  })

  return (
    <Marquee pauseOnHover="true" speed={50}>  
      {global.map((fave, i) => {
        return (
          <div key={i}>{fave} &emsp; &emsp;</div>

        )
        })
      }
    </Marquee>
  )
  
}

export default ReviewTicker;