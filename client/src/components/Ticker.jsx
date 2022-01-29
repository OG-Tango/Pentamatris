import Marquee from "react-fast-marquee";
import React from "react";
import { randomizeTickerReview, reviewArray } from "../../../server/api/gottenReviews";

const newRandomTickerReview = (rand) => {
  return reviewArray[rand]
}

const ReviewTicker = () => (
  <Marquee pauseOnHover="true" loop={50} speed={50}>
    Welcome to Pentamatris! Here you can see the favorite reviews of other players!
  </Marquee>
)

export default ReviewTicker;