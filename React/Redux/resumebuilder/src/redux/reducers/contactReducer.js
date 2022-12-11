import * as contactActions from "../actions/actions";
import intialState from "./initialState.json";

const contactReducer = (state = intialState.contact, action) => {
  switch (action.type) {
    case contactActions.SET_CONTACT:
      return {...action.payload};

    case contactActions.UPDATE_CONTACT:
      return { ...action.payload };

    default:
      return state;
  }
};

export default contactReducer;
