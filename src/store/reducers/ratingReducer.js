import { RATE_MOVIE } from "../actions/ratingActions";

export const initialState = [];

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
