import React, { useContext } from 'react'
import context from './Context'
import myContext from './myContext';

function Parent3() {
    const val1 = useContext(context);
    const val2 = useContext(myContext);
    console.log(val1);
    console.log(val2);
  return (
    <div>Parent3</div>
  )
}

export default Parent3