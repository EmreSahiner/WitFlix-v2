import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { ratingReducer } from "./ratingReducer";

const myReducerObj = {
  elma: movieReducer,
  rating: ratingReducer,
};

export const reducers = combineReducers(myReducerObj);
