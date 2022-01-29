const asinArr = require('./ASINs.js')
const express = require("express");
const externalRouter = express.Router();
const axios = require('axios');
const { X_RAPIDAPI_KEY } = process.env;

const generateIndex = () => {
  return Math.floor(Math.random() * asinArr.length);
};

externalRouter.get("/product/:stars", (req, res) => {
  //console.log(X_RAPIDAPI_KEY, "HERE");
  const options = {
    method: "GET",
    url: "https://amazon-product-reviews-keywords.p.rapidapi.com/product/reviews",
    params: {
      asin: asinArr[generateIndex()],
      page: "1",
      country: "US",
      filter_by_star: req.params.stars,
      variants: "1",
      top: "0",
    },
    headers: {
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com",
      "x-rapidapi-key": X_RAPIDAPI_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      if(response !== null) {
        //shuffle the response
        //let shuffleResponse = shuffleResponses
        //res.send(shuffleResponse[0])
        res.status(200).send(response.data.reviews[0]);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = externalRouter;
