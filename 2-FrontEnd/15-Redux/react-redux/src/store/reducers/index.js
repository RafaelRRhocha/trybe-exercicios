import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";

export const rootReducer = combineReducers({ tweetReducer });
