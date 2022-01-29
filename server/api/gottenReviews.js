const reviewArray = ['bought this for my son as a joke but now he is hairless and sad, i would rate this 100 stars if i could', 'i fed this to my dog and now he can talk, this rules!', 'my  car fell to pieces immediately. go to hell'];

const randomizeTickerReview = () => {
  return Math.floor(Math.random() * reviewArray.length);
}

module.exports = {
  reviewArray,
  randomizeTickerReview,
}