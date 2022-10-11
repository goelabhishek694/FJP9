import React, { useEffect, useState } from 'react'

function Ue1() {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState(10);
    //componentDidMount+componentDidUpdate
    useEffect(() => {
        console.log("useEffect is called");
        document.title=`Button is clicked ${count} times`
    })
    console.log("render");
  return (
    <div>
          <button onClick={() => {
              setCount(count + 1)
            //   setVal(45)
          }}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Ue1