import { TWEETAR } from "./actionTypes"

export const actCreatorNewTweet = (payload) => {
  return {
    type: TWEETAR,
    payload,
  };
};
