import React, { useState } from "react";

function Us() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(null);
    const [visible, setVisible] = useState(false);
    console.log(msg);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>
          <button
            onClick={() => {
              setMsg("I am coming from hooks");
              setVisible(true);
            }}
          >
            Click To View Message
          </button>
          {visible && <h1>{msg}</h1>}
        </div>
      </div>
    );
}

export default Us;
