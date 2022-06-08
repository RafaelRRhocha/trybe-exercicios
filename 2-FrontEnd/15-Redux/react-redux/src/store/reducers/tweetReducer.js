import { TWEETAR, DELETE_TWEET } from "../actions/actionTypes";

const initialState = {
  tweets: [],
}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEETAR:
      return {
        tweets: [
          ...state.tweets,
          { name: action.payload.name, message: action.payload.message },
        ],
      };
    case DELETE_TWEET:
      return {};
    default:
      return state;
  }
};

export default tweetReducer;