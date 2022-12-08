const initialState = {
  balls: 50,
  // ball: 23,
  // racquet:34
};

const BallReducer = (state = initialState, action) => {
  switch (action.type) {
      case "BUY_BALL":
      return {
        ...state,
        balls: state.balls - action.payload,
      };
    case "SELL_BALL":
      return {
        ...state,
        balls: state.balls + 1,
      };
    default:
      return state;
  }
};

export default BallReducer;
