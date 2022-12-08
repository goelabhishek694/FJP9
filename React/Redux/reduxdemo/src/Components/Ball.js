import React, { useState } from "react";
import { connect } from "react-redux";

function Ball(props) {
  // const [bll, setBall] = useState(0);
  return (
    <div>
      <h1>Balls: {props.balls}</h1>
      {/* <button onClick={()=>setBall(ball-1)}>Buy Ball</button> */}
      <button onClick={props.buyBall}>Buy Ball</button>
      <button onClick={props.sellBall}>Sell Ball</button>
    </div>
  );
}

//mapStateToProps-> it gets it's value from reducer function, then it returns an object to the component (as props)in which it defined with the help of connect. Then component uses that object
const mapStateToProps = (state) => {
  return {
    balls: state.ball.balls,
  };
};

//mapDispatchToProps-> it gets it's value from reducer function, then it returns an object to the component (as props)in which it defined with the help of connect. Then component uses that object
const mapDispatchToProps = (dispatch) => {
  return {
    buyBall: () => {
      dispatch({ type: "BUY_BALL" });
    },
    sellBall: () => {
      dispatch({ type: "SELL_BALL" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ball);

// props = {
//     bats: 20,
//     buyBat,
//     sellBat
// }
