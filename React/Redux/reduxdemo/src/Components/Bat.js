import React, { useState } from 'react'
import { connect } from 'react-redux';

function Bat(props) {
    // const [bat, setBat] = useState(0);
  return (
    <div>
          <h1>Bats: {props.batss}</h1>
          {/* <button onClick={()=>setBat(bat-1)}>Buy Bat</button> */}
          <button onClick={props.buyBat}>Buy Bat</button>
          <button onClick={props.sellBat}>Sell Bat</button>
    </div>
  );
}

//mapStateToProps-> it gets it's value from reducer function, then it returns an object to the component (as props)in which it defined with the help of connect. Then component uses that object 
const mapStateToProps = (state) => {
    return {
        batss:state.bats
    }
}

//mapDispatchToProps-> it gets it's value from reducer function, then it returns an object to the component (as props)in which it defined with the help of connect. Then component uses that object 
const mapDispatchToProps = (dispatch) => {
    return {
        buyBat: () => { dispatch({ type: "BUY_BAT" }) },
        sellBat:()=>{dispatch({type:"SELL_BAT"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bat);


// props = {
//     bats: 20,
//     buyBat,
//     sellBat
// }
