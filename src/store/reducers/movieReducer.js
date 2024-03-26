/* eslint-disable no-case-declarations */
import {
  ADD_COMPLETED,
  ADD_INCOMPLETED,
  ADD_MYLIST,
  REMOVE_MYLIST,
} from "../actions/movieActions";

/* const actionObject = {
  type: "KAYDET",
  payload: { title: "film adı" },
}; */

export const initialState = {
  incompleted: [],
  completed: [],
  myList: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOMPLETED:
      const newState = { ...state };
      const newIncompleted = [...state.incompleted, action.payload];
      newState.incompleted = newIncompleted;
      return newState;
    case ADD_COMPLETED: //yarıda kalmışlardan çıkar
      return {
        ...state,
        completed: [action.payload, ...state.completed],
        incompleted: state.incompleted.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case ADD_MYLIST:
      const movieInTheList = state.myList.find(
        (item) => item.id == action.payload.id
      );
      if (movieInTheList) {
        return state;
      } else {
        return { ...state, myList: [...state.myList, action.payload] };
      }
    case REMOVE_MYLIST:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
