import * as educationActions from "../actions/actions";
import intialState from "./initialState.json";

const educationReducer = (state = intialState.education, action) => {
  switch (action.type) {
    case educationActions.SET_EDUCATION:
      return { ...action.payload};

    case educationActions.UPDATE_EDUCATION:
      return { ...action.payload};

    default:
      return state;
  }
};

export default educationReducer;
