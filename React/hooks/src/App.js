import logo from './logo.svg';
import './App.css';
import Us from './Components/Us';
import Ue1 from './Components/Ue1';
import Ue2 from './Components/Ue2';
import Infinite from './Components/Infinite';
import Ue3 from './Components/Ue3';
import { useState } from 'react';
import context from './Components/Context';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
import Parent3 from './Components/Parent3';
import myContext from './Components/myContext';
function App() {
  const [theme, setTheme] = useState(false);
  const [count, setCount] = useState(10);
  return (
    <>
      <context.Provider value={theme}>
        <button onClick={() => setTheme(!theme)}>Change Theme</button>
        {/* // <Us />
      // <Ue1 />
      // <Ue2 />
      // <Infinite />
      // <Ue3 /> */}
        <Navbar />
        <Parent1 />
        <Parent2 />
      </context.Provider>
      <myContext.Provider value={count}>
        <Parent3 />
      </myContext.Provider>
    </>
  );
}

export default App;
