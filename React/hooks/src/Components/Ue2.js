import React, { useEffect, useState } from "react";

function Ue2() {
  const [count, setCount] = useState(0);
  //componentDidMount
  //this variation is needed when we want useEffect to behave like componentDidMount i.e we need to do some side effect calls
  useEffect(() => {
    console.log("useEffect is called");
    document.title = `Button is clicked ${count} times`;
  },[]);
  console.log("render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Ue2;
