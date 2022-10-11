import React, { useEffect, useState } from 'react'

function Ue3() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState({ sayHi: "I am hooked" });
  //componentDidMount+componentDidUpdate
  useEffect(() => {
    console.log("useEffect is called");
  });
    
  //when count state is changed
  useEffect(() => {
    console.log("useEffect of count is called");
    document.title = `Button is clicked ${count} times`;
  }, [count]);
    
  //when msg state is changed
  useEffect(() => {
    console.log("useEffect of msg is called");
  }, [msg]);

  let handleMsg = (e) => {
    msg.sayHi = e.target.value;
    console.log(msg);
    setMsg({ ...msg });
  };

  console.log("render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input type="text" value={msg.sayHi} onChange={(e) => handleMsg(e)} />
    </div>
  );
}

export default Ue3